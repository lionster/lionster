import {AboutCard} from 'components/about';
import {InfoCard} from 'components/about/InfoCard';
import {FunctionComponent} from 'react';

export interface AboutPageProps {
}

const AboutPage: FunctionComponent<AboutPageProps> = (props) => {
    return (
        <div className="max-w-screen-lg mx-auto px-4">
            <div className="flex">
                <AboutCard/>
                <InfoCard/>
            </div>
        </div>
    );
};

export default AboutPage;
