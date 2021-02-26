import {useRecoilState} from 'recoil';
import {AtomAuthEmail} from '../../../atoms/atom-auth-email';
import {AuthConfirmForm} from '../AuthConfirmForm/AuthConfirmForm';
import {DivAnd, DivComponent} from '../../utils';

export const AuthConfirm: DivComponent = ({className}) => {
    const [confirmEmail] = useRecoilState(AtomAuthEmail);

    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-lg font-bold mx-auto mb-3">
                Check your email
            </div>
            <div className="mb-6">
                We&apos;ve sent you a confirmation code to{' '}
                <span className="font-bold">{confirmEmail}</span>. Please enter
                it below to confirm your email address.
            </div>
            <AuthConfirmForm />
        </DivAnd>
    );
};
