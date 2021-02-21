import {useFormik} from 'formik';
import {FunctionComponent} from 'react';
import {Button, Form} from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});

export const AuthLoginForm: FunctionComponent = () => {
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {email: '', password: ''},
        onSubmit: (values) => console.error(values)
    });

    return (
        <Form
            className="flex flex-col mb-6"
            noValidate
            validated={Boolean(formik.submitCount)}
            onSubmit={formik.handleSubmit}
        >
            <Form.Group controlId="validationEmail">
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                        formik.submitCount && Boolean(formik.errors.email)
                    }
                    required
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationPassword">
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                        formik.submitCount && Boolean(formik.errors.password)
                    }
                    required
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign In
            </Button>
        </Form>
    );
};
