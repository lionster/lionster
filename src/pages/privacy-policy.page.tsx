import {FunctionComponent} from 'react';
import {PublicPolicy} from '../components/public/PublicPolicy/PublicPolicy';
import {PublicLayout} from '../components/public/PublicLayout/PublicLayout';

const PrivacyPolicyPage: FunctionComponent = (props) => {
    return (
        <PublicLayout>
            <PublicPolicy />
        </PublicLayout>
    );
};

export default PrivacyPolicyPage;
