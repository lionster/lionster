import {Button, TextField} from '@material-ui/core';
import {useFormik} from 'formik';
import {FunctionComponent, useState} from 'react';
import * as yup from 'yup';
import {useRouter} from 'next/router';
import {useToast} from '../../hooks/utils/useToast';
import {usePromise} from '../../hooks/utils/usePromise';
import {Auth} from 'aws-amplify';

const schema = yup.object().shape({
    email: yup.string().email().required()
});

export const AuthForgotForm: FunctionComponent = () => {
    const [disabled, setDisabled] = useState(false);
    const toast = useToast('warning', true);
    const router = useRouter();
    const submit = usePromise(async ({email: username}) => {
        try {
            setDisabled(true);
            // const user = await Auth.signIn({username, password});
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
