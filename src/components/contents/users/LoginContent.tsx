import {useFormik} from 'formik';
import {FunctionComponent} from 'react';
import {Button, Form} from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});

export const LoginContent: FunctionComponent = () => {
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {email: '', password: ''},
        onSubmit: (values) => console.log(values)
    });

    return (
        <Form
            noValidate
            className="flex flex-col"
            onSubmit={formik.handleSubmit}
        >
            <Form.Group controlId="validationEmail">
                <Form.Control
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={
                        formik.touched && formik.dirty && !formik.errors.email
                    }
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationPassword">
                <Form.Control
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={
                        formik.touched &&
                        formik.dirty &&
                        !formik.errors.password
                    }
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign In
            </Button>
        </Form>
    );
};
