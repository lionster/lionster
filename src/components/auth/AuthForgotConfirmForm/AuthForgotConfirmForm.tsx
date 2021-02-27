import {Button, TextField} from '@material-ui/core';
import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import {useRouter} from 'next/router';
import {FunctionComponent} from 'react';
import * as yup from 'yup';
import {usePromiseBusy} from '../../hooks/utils/usePromiseBusy';
import {useToast} from '../../hooks/utils/useToast';
import {ROUTES} from '../../routes/routes.types';

const schema = yup.object().shape({
    code: yup.number().required(),
    password: yup
        .string()
        .required('Password is required.')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, and One Number.'
        ),
    confirm_password: yup
        .string()
        .required('Confirm password is required.')
        .oneOf([yup.ref('password')], 'Passwords must match.')
});

export interface AuthForgotConfirmFormProps {
    username: string;
}

export const AuthForgotConfirmForm: FunctionComponent<AuthForgotConfirmFormProps> = ({
    username
}) => {
    const toastInfo = useToast('info', true);
    const router = useRouter();
    const [disabled, submit] = usePromiseBusy(async ({code, password}) => {
        await Auth.forgotPasswordSubmit(username, code.toString(), password);
        toastInfo('Your password has been changed.');
        await router.push(ROUTES.LOG_IN);
    });
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            code: '',
            password: '',
            confirm_password: ''
        },
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
                type="number"
                name="code"
                label="Code"
                disabled={disabled}
                value={formik.values.code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.submitCount && formik.errors.code)}
                helperText={(formik.submitCount && formik.errors.code) || ' '}
                required
            />
            <TextField
                fullWidth
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

            <TextField
                fullWidth
                type="password"
                name="confirm_password"
                label="Confirm password"
                disabled={disabled}
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(
                    formik.submitCount && formik.errors.confirm_password
                )}
                helperText={
                    (formik.submitCount && formik.errors.confirm_password) ||
                    ' '
                }
                required
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
            >
                Change password
            </Button>
        </form>
    );
};
