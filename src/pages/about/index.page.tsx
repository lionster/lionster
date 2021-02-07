import {AboutCard, ContributorCard, InfoCard, TeamCard} from 'components/about';
import {FunctionComponent} from 'react';

const AboutPage: FunctionComponent = (props) => {
    return (
        <div className="max-w-screen-lg mx-auto px-4">
            <div className="flex space-x-4">
                <AboutCard className="w-1/3"/>
                <InfoCard className="w-2/3"/>
            </div>
            <div className="flex text-2xl font-bold mt-8 mb-4">
                Core Team
            </div>
            <div className="grid grid-cols-3 gap-4">
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
            </div>
            <div className="flex text-2xl font-bold mt-8 mb-4">
                Contributors
            </div>
            <div className="grid grid-cols-3 gap-4">
                <ContributorCard/>
                <ContributorCard/>
                <ContributorCard/>
                <ContributorCard/>
                <ContributorCard/>
                <ContributorCard/>
            </div>
        </div>
    );
};

export default AboutPage;
