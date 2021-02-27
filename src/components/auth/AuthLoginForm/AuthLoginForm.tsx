import {Button, TextField} from '@material-ui/core';
import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import {useRouter} from 'next/router';
import {FunctionComponent} from 'react';
import {useSetRecoilState} from 'recoil';
import * as yup from 'yup';
import {AtomAuthEmail} from '../../../atoms/atom-auth-email';
import {usePromiseBusy} from '../../hooks/utils/usePromiseBusy';
import {useToast} from '../../hooks/utils/useToast';
import {ROUTES} from '../../routes/routes.types';

const schema = yup.object().shape({
    email: yup.string().email().required('Email is required.'),
    password: yup.string().required('Password is required.')
});

export const AuthLoginForm: FunctionComponent = () => {
    const setAuthEmail = useSetRecoilState(AtomAuthEmail);
    const toastInfo = useToast('info');
    const router = useRouter();
    const [disabled, submit] = usePromiseBusy(async ({email, password}) => {
        try {
            await Auth.signIn({username: email, password});
            await router.push(ROUTES.DASHBOARD);
        } catch (err) {
            if (err.code === 'UserNotConfirmedException') {
                toastInfo('Please confirm your email address.');
                setAuthEmail(email);
                await router.push(ROUTES.REGISTER);
            } else {
                throw err;
            }
        }
    });

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {email: '', password: ''},
        onSubmit: submit
    });

    return (
        <form
            className="flex flex-col mb-6"
            noValidate
            onSubmit={formik.handleSubmit}
        >
            <TextField
                fullWidth
                name="email"
                label="Email"
                disabled={disabled}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.submitCount && formik.errors.email)}
                helperText={(formik.submitCount && formik.errors.email) || ' '}
                required
            />
            <TextField
                fullWidth
                className="mb-1"
                type="password"
                name="password"
                label="Password"
                disabled={disabled}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.submitCount && formik.errors.password)}
                helperText={
                    (formik.submitCount && formik.errors.password) || ' '
                }
                required
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
            >
                Sign In
            </Button>
        </form>
    );
};
