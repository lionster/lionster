import {DivAnd, DivComponent} from '../../utils/DivAnd';

export const AuthSocialLogins: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            Social Logins
        </DivAnd>
    );
};
