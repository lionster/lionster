import {Button, TextField} from '@material-ui/core';
import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import {FunctionComponent} from 'react';
import {useSetRecoilState} from 'recoil';
import * as yup from 'yup';
import {AtomAuthEmail} from '../../../atoms/atom-auth-email';
import {usePromiseBusy} from '../../hooks/utils/usePromiseBusy';
import {useToast} from '../../hooks/utils/useToast';

const schema = yup.object().shape({
    email: yup.string().email().required()
});

export const AuthForgotForm: FunctionComponent = () => {
    const setAuthEmail = useSetRecoilState(AtomAuthEmail);
    const toastInfo = useToast('info', true);
    const [disabled, submit] = usePromiseBusy(async ({email}) => {
        await Auth.forgotPassword(email);
        toastInfo('We sent you a password reset email.');
        setAuthEmail(email);
    });
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {email: ''},
        onSubmit: submit
    });
    return (
        <form
            noValidate
            className="flex flex-col mb-6"
            onSubmit={formik.handleSubmit}
        >
            <TextField
                fullWidth
                type="email"
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
            <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
            >
                Continue
            </Button>
        </form>
    );
};
