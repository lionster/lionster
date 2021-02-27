import {DivAnd, DivComponent} from '../../utils/DivAnd';
import {AuthForgotForm} from '../AuthForgotForm/AuthForgotForm';

export const AuthForgot: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-lg font-bold mx-auto mb-3">
                Password recovery
            </div>
            <AuthForgotForm />
        </DivAnd>
    );
};
