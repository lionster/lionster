import {Button, TextField} from '@material-ui/core';
import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import {useRouter} from 'next/router';
import {FunctionComponent, useState} from 'react';
import * as yup from 'yup';
import {usePromise} from '../../hooks/utils/usePromise';
import {useToast} from '../../hooks/utils/useToast';

const schema = yup.object().shape({
    email: yup.string().email().required()
});

export const AuthForgotForm: FunctionComponent = () => {
    const [disabled, setDisabled] = useState(false);
    const toast = useToast('info', true);
    const router = useRouter();
    const submit = usePromise(async ({email}) => {
        try {
            setDisabled(true);
            const user = await Auth.forgotPassword(email);
            toast('We sent you a password reset email.');
            await router.push('/users/login');
        } finally {
            setDisabled(false);
        }
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
                helperText={formik.errors.email || ' '}
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
