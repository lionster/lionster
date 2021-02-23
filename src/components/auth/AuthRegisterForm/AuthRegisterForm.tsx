import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FunctionComponent} from 'react';
import {Button, Form} from 'react-bootstrap';
import * as yup from 'yup';
import {environment} from '../../../environment/environment';
import {usePromise} from '../../../hooks/utils/usePromise';

const schema = yup.object().shape({
    username: yup.string().required('Name is required.'),
    email: yup.string().email().required('Email is required.'),
    password: yup
        .string()
        .required('Password is required.')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, and One Number'
        ),
    // @todo there is a way to make it required and also true
    terms: yup.boolean().required('Must accept terms and conditions.'),
    news: yup.boolean()
});

const INITIAL_VALUES = {
    username: '',
    email: '',
    password: '',
    terms: false,
    news: false
};

export const AuthRegisterForm: FunctionComponent = () => {
    const router = useRouter();
    const submit = usePromise(
        async ({username: name, email: username, password, terms, news}) => {
            await Auth.signUp({
                username,
                password,
                attributes: {name, picture: ''}
            });
            await router.push('/users/confirm');
        }
    );

    const formik = useFormik({
        validationSchema: schema,
        initialValues: INITIAL_VALUES,
        onSubmit: submit
    });

    const termsLabel = (
        <span>
            I agree to our{' '}
            <Link href="/privacy-policy/">
                <a>Terms and Privacy Policy</a>
            </Link>
            .
        </span>
    );

    const newsLabel = (
        <span>
            I agree to receive {environment.brandName} news and updates.
        </span>
    );

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
                    isInvalid={Boolean(
                        formik.submitCount && formik.errors.username
                    )}
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
                    isInvalid={Boolean(
                        formik.submitCount && formik.errors.email
                    )}
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
                    isInvalid={Boolean(
                        formik.submitCount && formik.errors.password
                    )}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationTerms">
                <Form.Check
                    name="terms"
                    label={termsLabel}
                    checked={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                        formik.submitCount && formik.errors.terms
                    )}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.terms}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationNews">
                <Form.Check
                    name="news"
                    label={newsLabel}
                    checked={formik.values.news}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                        formik.submitCount && formik.errors.news
                    )}
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
