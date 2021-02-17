import {FunctionComponent} from 'react';
import {PrivacyPolicyContent} from '../components/contents/privacy-policy/PrivacyPolicyContent';
import {PublicLayout} from '../components/contents/layouts/PublicLayout';

const PrivacyPolicyPage: FunctionComponent = (props) => {
    return (
        <PublicLayout>
            <PrivacyPolicyContent />
        </PublicLayout>
    );
};

export default PrivacyPolicyPage;
