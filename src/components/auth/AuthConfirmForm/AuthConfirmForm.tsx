import {Button, TextField} from '@material-ui/core';
import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import {useRouter} from 'next/router';
import {FunctionComponent, useState} from 'react';
import {useRecoilState} from 'recoil';
import * as yup from 'yup';
import {useEffectAsync} from '../../../hooks/utils';
import {usePromise} from '../../../hooks/utils/usePromise';
import {useToast} from '../../../hooks/utils/useToast';
import {ConfirmEmailAtom} from '../atoms/confirm-email-atom';

const schema = yup.object().shape({
    code: yup.number().required()
});

export const AuthConfirmForm: FunctionComponent = () => {
    const [confirmEmail] = useRecoilState(ConfirmEmailAtom);
    const [disabled, setDisabled] = useState(!confirmEmail);
    const router = useRouter();
    const toastInfo = useToast('info');
    const toastSuccess = useToast('success');

    const submit = usePromise(async ({code}) => {
        try {
            setDisabled(true);
            await Auth.confirmSignUp(confirmEmail, code?.toString());
            toastSuccess('Your email has been verified');
            await router.push('/users/login');
        } finally {
            setDisabled(false);
        }
    });

    const resend = usePromise(async () => {
        try {
            setDisabled(true);
            await Auth.resendSignUp(confirmEmail);
            toastInfo('Confirmation code sent.');
        } finally {
            setDisabled(false);
        }
    }, [confirmEmail]);

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {code: ''},
        onSubmit: submit
    });

    useEffectAsync(async () => {
        if (!confirmEmail) {
            toastInfo('Please sign in using your email address.');
            await router.push('/users/login');
        }
    }, [confirmEmail]);

    return (
        <>
            <form
                noValidate
                className="flex flex-col mb-6"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    fullWidth
                    type="number"
                    name="code"
                    label="Code"
                    disabled={disabled}
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.submitCount && formik.errors.code)}
                    helperText={formik.errors.code || ' '}
                    required
                />
                <Button
                    className="mt-4"
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={disabled}
                >
                    Continue
                </Button>
            </form>
            <Button onClick={resend}>Send code again</Button>
        </>
    );
};
