import {AboutCard} from 'components/about';
import {environment} from 'environment/environment';
import {FunctionComponent} from 'react';

export interface AboutPageProps {
}

const AboutPage: FunctionComponent<AboutPageProps> = (props) => {
    return (
        <div className="max-w-screen-lg mx-auto px-4">
            <div className="flex">
                <AboutCard className="test"/>
                <div>
                    <span className="font-bold">{environment.brandName} is an open source project.</span> At its heart,
                    is a team of software developers who volunteered their time and experience to create this amazing
                    project.
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
