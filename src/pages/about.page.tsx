import {FunctionComponent} from 'react';
import PublicAbout from '../components/public/PublicAbout/PublicAbout';
import {PublicLayout} from '../components/public/PublicLayout/PublicLayout';

const AboutPage: FunctionComponent = (props) => {
    return (
        <PublicLayout>
            <PublicAbout />
        </PublicLayout>
    );
};

export default AboutPage;
