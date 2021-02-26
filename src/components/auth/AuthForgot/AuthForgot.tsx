import Link from 'next/link';
import {AuthForgotForm} from '../AuthForgotForm/AuthForgotForm';
import {DivAnd, DivComponent} from '../../utils/DivAnd';

export const AuthForgot: DivComponent = ({className}) => {
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
