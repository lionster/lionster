import {DivAnd, DivComponent} from '../../utils/DivAnd';
import {AuthRegisterForm} from '../AuthRegisterForm/AuthRegisterForm';
import {AuthSocialLogins} from '../AuthSocialLogins/AuthSocialLogins';

export const AuthRegister: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-lg font-bold mx-auto mb-3">
                Create a new account
            </div>
            <AuthRegisterForm />
            <div className="flex mx-auto mb-6">OR</div>
            <AuthSocialLogins className="mb-6" />
        </DivAnd>
    );
};
