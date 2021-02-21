import {useFormik} from 'formik';
import {FunctionComponent} from 'react';
import {Button, Form} from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required()
});

export const AuthForgotForm: FunctionComponent = () => {
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {email: ''},
        onSubmit: (values) => console.log(values)
    });
    return (
        <Form
            noValidate
            className="flex flex-col mb-6"
            onSubmit={formik.handleSubmit}
        >
            <Form.Group controlId="validationEmail">
                <Form.Label>Email you're using</Form.Label>
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
            </Form.Group>
            <Button variant="primary" type="submit">
                Continue
            </Button>
        </Form>
    );
};
