import {useRecoilValue} from 'recoil';
import {AtomAuthEmail} from '../../../atoms/atom-auth-email';
import {DivComponent} from '../../utils/DivAnd';
import {AuthConfirmForm} from '../AuthConfirmForm/AuthConfirmForm';
import {AuthHeading} from '../AuthHeading/AuthHeading';

export const AuthConfirm: DivComponent = ({className}) => {
    const authEmail = useRecoilValue(AtomAuthEmail);

    return (
        <>
            <AuthHeading title="Confirmation Code" />
            <div className="mb-6">
                We&apos;ve sent you a confirmation code to{' '}
                <span className="font-bold">{authEmail}</span>. Please enter it
                below to confirm your email address.
            </div>
            <AuthConfirmForm />
        </>
    );
};
