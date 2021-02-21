import {Auth} from 'aws-amplify';
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
        onSubmit: async (
            {username, email, password, terms, news},
            formikHelpers
        ) => {
            try {
                const result = await Auth.signUp({
                    username,
                    password,
                    attributes: {email}
                });
                console.log(result);
            } catch (err) {
                console.error(err);
            }
        }
    });
    return (
        <Form
            className="flex flex-col mb-6"
            noValidate
            validated={Boolean(formik.submitCount)}
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
                    isInvalid={
                        formik.submitCount && Boolean(formik.errors.username)
                    }
                    required
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.username}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
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
            <Form.Group controlId="validationTerms">
                <Form.Check
                    name="terms"
                    label="I agree to our Terms and Privacy Policy."
                    checked={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                        formik.submitCount && Boolean(formik.errors.terms)
                    }
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.terms}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationNews">
                <Form.Check
                    name="news"
                    label="I agree to receive TensorShare news and updates."
                    checked={formik.values.news}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                        formik.submitCount && Boolean(formik.errors.news)
                    }
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.news}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Account
            </Button>
        </Form>
    );
};
