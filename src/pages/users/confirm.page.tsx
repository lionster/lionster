import {Auth} from 'aws-amplify';
import {FunctionComponent} from 'react';
import {
    BackType,
    UsersLayout
} from '../../components/contents/layouts/UsersLayout';
import {ConfirmContent} from '../../components/contents/users/ConfirmContent';
import {useEffectAsync} from '../../hooks/utils';

const ConfirmPage: FunctionComponent = () => {
    useEffectAsync(async () => {
        const user = await Auth.currentUserInfo();
        console.error('USER', user);
    });

    return (
        <UsersLayout backType={BackType.login}>
            <ConfirmContent />
        </UsersLayout>
    );
};

export default ConfirmPage;
