import {FunctionComponent} from 'react';
import {
    BackType,
    UsersLayout
} from '../../components/contents/layouts/UsersLayout';
import {ForgotContent} from '../../components/contents/users/ForgotContent';

const ForgotPage: FunctionComponent = () => {
    return (
        <UsersLayout backType={BackType.login}>
            <ForgotContent />
        </UsersLayout>
    );
};

export default ForgotPage;
