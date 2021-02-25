import Link from 'next/link';
import {AuthConfirmForm} from '../../auth/AuthConfirmForm/AuthConfirmForm';
import {DivAnd, DivComponent} from '../../utils';

export interface ConfirmContentProps {
    email: string;
}

export const ConfirmContent: DivComponent<ConfirmContentProps> = ({
    className,
    email
}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-lg font-bold mx-auto mb-3">
                Check your email
            </div>
            <div>
                We've sent you a confirmation code to{' '}
                <span className="font-bold">{email}</span>. Please enter it
                below to confirm your email address.
            </div>
            <AuthConfirmForm />

            <Link href="/users/login">
                <a>Send code again</a>
            </Link>
        </DivAnd>
    );
};
