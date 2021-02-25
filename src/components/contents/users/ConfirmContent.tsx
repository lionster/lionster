import {useRecoilState} from 'recoil';
import {ConfirmEmailAtom} from '../../auth/atoms/confirm-email-atom';
import {AuthConfirmForm} from '../../auth/AuthConfirmForm/AuthConfirmForm';
import {DivAnd, DivComponent} from '../../utils';

export const ConfirmContent: DivComponent = ({className}) => {
    const [confirmEmail] = useRecoilState(ConfirmEmailAtom);

    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-lg font-bold mx-auto mb-3">
                Check your email
            </div>
            <div className="mb-6">
                We've sent you a confirmation code to{' '}
                <span className="font-bold">{confirmEmail}</span>. Please enter
                it below to confirm your email address.
            </div>
            <AuthConfirmForm />
        </DivAnd>
    );
};
