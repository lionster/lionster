import {useFormik} from 'formik';
import {FunctionComponent} from 'react';
import {Button, Form} from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    // @todo there is a way to make it required and also true
    terms: yup.boolean().required(),
    news: yup.boolean()
});

export const AuthRegisterForm: FunctionComponent = () => {
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            username: '',
            email: '',
            password: '',
            terms: false,
            news: false
        },
        onSubmit: (values) => console.log(values)
    });
    return (
        <Form
            noValidate
            className="flex flex-col mb-6"
            onSubmit={formik.handleSubmit}
        >
            <Form.Group controlId="validationUsername">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={
                        formik.touched &&
                        formik.dirty &&
                        !formik.errors.username
                    }
                />
            </Form.Group>
            <Form.Group controlId="validationEmail">
                <Form.Label>Email</Form.Label>
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
            <Form.Group controlId="validationPassword">
                <Form.Label>Password</Form.Label>
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
            </Form.Group>
            <Form.Group controlId="validationTerms">
                <Form.Check
                    name="terms"
                    label="I agree to our Terms and Privacy Policy."
                    checked={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={
                        formik.touched && formik.dirty && !formik.errors.terms
                    }
                />
            </Form.Group>
            <Form.Group controlId="validationNews">
                <Form.Check
                    name="news"
                    label="I agree to receive TensorShare news and updates."
                    checked={formik.values.news}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={
                        formik.touched && formik.dirty && !formik.errors.news
                    }
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Account
            </Button>
        </Form>
    );
};
