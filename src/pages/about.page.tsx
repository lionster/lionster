import {FunctionComponent} from 'react';
import AboutContent from '../components/about/AboutContent';
import {PublicLayout} from '../components/contents/layouts/PublicLayout';

const AboutPage: FunctionComponent = (props) => {
    return (
        <PublicLayout>
            <AboutContent />
        </PublicLayout>
    );
};

export default AboutPage;
