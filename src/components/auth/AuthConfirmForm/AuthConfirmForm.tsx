import {Button, TextField} from '@material-ui/core';
import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import {useRouter} from 'next/router';
import {FunctionComponent} from 'react';
import {useRecoilValue} from 'recoil';
import * as yup from 'yup';
import {AtomAuthEmail} from '../../../atoms/atom-auth-email';
import {usePromiseBusy} from '../../hooks/utils/usePromiseBusy';
import {useToast} from '../../hooks/utils/useToast';
import {ROUTES} from '../../routes/routes.types';

const schema = yup.object().shape({
    code: yup.number().required()
});

export const AuthConfirmForm: FunctionComponent = () => {
    const authEmail = useRecoilValue(AtomAuthEmail);
    const router = useRouter();
    const toastInfo = useToast('info');
    const toastSuccess = useToast('success');

    const [busySubmit, submit] = usePromiseBusy(
        async ({code}) => {
            await Auth.confirmSignUp(authEmail, code.toString());
            toastSuccess('Your email has been verified');
            await router.push(ROUTES.LOG_IN);
        },
        [authEmail]
    );

    const [busyResend, resend] = usePromiseBusy(async () => {
        await Auth.resendSignUp(authEmail);
        toastInfo('Confirmation code sent.');
    }, [authEmail]);

    const disabled = busySubmit || busyResend;

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {code: ''},
        onSubmit: submit
    });

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
                    helperText={
                        (formik.submitCount && formik.errors.code) || ' '
                    }
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
