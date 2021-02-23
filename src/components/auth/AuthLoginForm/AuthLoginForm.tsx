import {Button, TextField} from '@material-ui/core';
import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import {FunctionComponent, useState} from 'react';
import * as yup from 'yup';
import {usePromise} from '../../../hooks/utils/usePromise';

const schema = yup.object().shape({
    email: yup.string().email().required('Email is required.'),
    password: yup.string().required('Password is required.')
});

export const AuthLoginForm: FunctionComponent = () => {
    const [disabled, setDisabled] = useState(false);

    const submit = usePromise(async ({email: username, password}) => {
        try {
            setDisabled(true);
            const user = await Auth.signIn({username, password});
        } finally {
            setDisabled(false);
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
                variant="outlined"
                size="small"
                disabled={disabled}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.submitCount && Boolean(formik.errors.email)}
                helperText={formik.errors.email || ' '}
                required
            />
            <TextField
                fullWidth
                className="mb-1"
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                size="small"
                disabled={disabled}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.submitCount && Boolean(formik.errors.password)}
                helperText={formik.errors.password || ' '}
                required
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                disableElevation
                disabled={disabled}
            >
                Sign In
            </Button>
        </form>
    );
};
