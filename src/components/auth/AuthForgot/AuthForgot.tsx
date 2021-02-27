import {FunctionComponent, useEffect} from 'react';
import {useRecoilValue, useResetRecoilState} from 'recoil';
import {AtomAuthEmail} from '../../../atoms/atom-auth-email';
import {AuthForgotConfirmForm} from '../AuthForgotConfirmForm/AuthForgotConfirmForm';
import {AuthForgotForm} from '../AuthForgotForm/AuthForgotForm';
import {AuthHeading} from '../AuthHeading/AuthHeading';

export const AuthForgot: FunctionComponent = () => {
    const authEmail = useRecoilValue(AtomAuthEmail);
    const resetAuthEmail = useResetRecoilState(AtomAuthEmail);
    useEffect(() => resetAuthEmail(), []);
    return (
        <>
            <AuthHeading title="Password recovery" />
            {authEmail ? (
                <AuthForgotConfirmForm username={authEmail} />
            ) : (
                <AuthForgotForm />
            )}
        </>
    );
};
