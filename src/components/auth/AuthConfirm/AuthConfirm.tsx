import {useRecoilState} from 'recoil';
import {AtomAuthEmail} from '../../../atoms/atom-auth-email';
import {DivComponent} from '../../utils/DivAnd';
import {AuthConfirmForm} from '../AuthConfirmForm/AuthConfirmForm';
import {AuthHeading} from '../AuthHeading/AuthHeading';

export const AuthConfirm: DivComponent = ({className}) => {
    const [confirmEmail] = useRecoilState(AtomAuthEmail);

    return (
        <>
            <AuthHeading title="Confirmation Code" />
            <div className="mb-6">
                We&apos;ve sent you a confirmation code to{' '}
                <span className="font-bold">{confirmEmail}</span>. Please enter
                it below to confirm your email address.
            </div>
            <AuthConfirmForm />
        </>
    );
};
