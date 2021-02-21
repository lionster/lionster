import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import {FunctionComponent, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});

export const AuthLoginForm: FunctionComponent = () => {
    const [invalidSignIn, setInvalidSignIn] = useState(false);

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {email: '', password: ''},
        onSubmit: async ({email: username, password}, formikHelpers) => {
            try {
                const user = await Auth.signIn({username, password});
                console.log(user);
            } catch (err) {
                console.error(err);
                if (err.name === 'UserNotFoundException') {
                    setInvalidSignIn(true);
                } else {
                    throw err;
                }
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
            {invalidSignIn && (
                <div className="text-danger mb-4">
                    The email or password you entered is incorrect. Please try
                    again.
                </div>
            )}
            <Button variant="primary" type="submit">
                Sign In
            </Button>
        </Form>
    );
};
