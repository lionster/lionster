import {FunctionComponent} from 'react';
import PublicAbout from '../components/public/PublicAbout/PublicAbout';
import {PublicLayout} from '../components/public/PublicLayout/PublicLayout';
import {PageTitle} from '../components/utils/PageTitle';

const AboutPage: FunctionComponent = (props) => {
    return (
        <>
            <PageTitle title="About" />
            <PublicLayout>
                <PublicAbout />
            </PublicLayout>
        </>
    );
};

export default AboutPage;
