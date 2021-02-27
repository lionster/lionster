import {FunctionComponent} from 'react';
import {PublicLayout} from '../components/public/PublicLayout/PublicLayout';
import {PublicPolicy} from '../components/public/PublicPolicy/PublicPolicy';
import {PageTitle} from '../components/utils/PageTitle';

const PrivacyPolicyPage: FunctionComponent = (props) => {
    return (
        <>
            <PageTitle title="Privacy Policy" />
            <PublicLayout>
                <PublicPolicy />
            </PublicLayout>
        </>
    );
};

export default PrivacyPolicyPage;
