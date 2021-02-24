import {Button, TextField} from '@material-ui/core';
import {useFormik} from 'formik';
import {FunctionComponent, useState} from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required()
});

export const AuthConfirmForm: FunctionComponent = () => {
    const [disabled, setDisabled] = useState(false);
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {email: ''},
        onSubmit: (values) => console.log(values)
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
