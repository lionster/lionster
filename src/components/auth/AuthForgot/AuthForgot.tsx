import {FunctionComponent} from 'react';
import {AuthForgotForm} from '../AuthForgotForm/AuthForgotForm';
import {AuthHeading} from '../AuthHeading/AuthHeading';

export const AuthForgot: FunctionComponent = () => {
    return (
        <>
            <AuthHeading title="Password recovery" />
            <AuthForgotForm />
        </>
    );
};
