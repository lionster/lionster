import {
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    TextField
} from '@material-ui/core';
import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import Link from 'next/link';
import {FunctionComponent, useState} from 'react';
import {useRecoilState} from 'recoil';
import * as yup from 'yup';
import {AtomAuthEmail} from '../../../atoms/atom-auth-email';
import {environment} from '../../../environment/environment';
import {usePromise} from '../../hooks/utils/usePromise';
import {ROUTES} from '../../routes/routes.types';

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
    terms: yup.boolean().oneOf([true], 'Must accept terms and conditions.'),
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
    const [confirmEmail, setConfirmEmail] = useRecoilState(AtomAuthEmail);
    const [disabled, setDisabled] = useState(false);
    const submit = usePromise(
        async ({username: name, email: username, password, terms, news}) => {
            setDisabled(true);
            try {
                await Auth.signUp({
                    username,
                    password,
                    attributes: {name, picture: ''}
                });
                setConfirmEmail(username);
            } finally {
                setDisabled(false);
            }
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
            <Link href={ROUTES.PRIVACY_POLICY}>
                <a target="_blank">Terms and Privacy Policy</a>
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
        <form
            className="flex flex-col mb-6"
            noValidate
            onSubmit={formik.handleSubmit}
        >
            <TextField
                fullWidth
                name="username"
                label="Username"
                disabled={disabled}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.submitCount && formik.errors.username)}
                helperText={formik.errors.username || ' '}
                required
            />

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

            <TextField
                fullWidth
                type="password"
                name="password"
                label="Password"
                disabled={disabled}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.submitCount && formik.errors.password)}
                helperText={formik.errors.password || ' '}
                required
            />

            <FormControlLabel
                control={
                    <Checkbox
                        name="terms"
                        checked={formik.values.terms}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={disabled}
                    />
                }
                label={termsLabel}
            />

            {Boolean(formik.submitCount && formik.errors.terms) && (
                <FormHelperText error={true}>
                    {formik.errors.terms}
                </FormHelperText>
            )}

            <FormControlLabel
                control={
                    <Checkbox
                        name="news"
                        checked={formik.values.news}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={disabled}
                    />
                }
                label={newsLabel}
            />

            <Button
                className="mt-4"
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
            >
                Create Account
            </Button>
        </form>
    );
};
