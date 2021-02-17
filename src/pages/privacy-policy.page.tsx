import {FunctionComponent} from 'react';
import {PrivacyPolicyContent} from '../components/pages/privacy-policy/PrivacyPolicyContent';
import {PublicLayout} from '../components/pages/PublicLayout';

const PrivacyPolicyPage: FunctionComponent = (props) => {
    return (
        <PublicLayout>
            <PrivacyPolicyContent />
        </PublicLayout>
    );
};

export default PrivacyPolicyPage;
