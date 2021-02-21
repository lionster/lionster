import Link from 'next/link';
import {AuthForgotForm} from '../../auth/AuthForgotForm/AuthForgotForm';
import {DivAnd, DivComponent} from '../../utils';

export const ForgotContent: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-lg font-bold mx-auto mb-3">
                Password recovery
            </div>
            <AuthForgotForm />
            <Link href="/users/login">
                <a>Return to sign in.</a>
            </Link>
        </DivAnd>
    );
};
