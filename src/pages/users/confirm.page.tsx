import {Auth} from 'aws-amplify';
import {FunctionComponent} from 'react';
import {
    BackType,
    AuthLayout
} from '../../components/auth/AuthLayout/AuthLayout';
import {AuthConfirm} from '../../components/auth/AuthConfirm/AuthConfirm';
import {useEffectAsync} from '../../components/hooks/utils';

const ConfirmPage: FunctionComponent = () => {
    useEffectAsync(async () => {
        const user = await Auth.currentUserInfo();
        console.error('USER', user);
    });

    return (
        <AuthLayout backType={BackType.login}>
            <AuthConfirm />
        </AuthLayout>
    );
};

export default ConfirmPage;
