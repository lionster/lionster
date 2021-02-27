import {FunctionComponent} from 'react';
import {PublicAboutCard} from '../PublicAboutCard/PublicAboutCard';
import {PublicContributorCard} from '../PublicContributorCard/PublicContributorCard';
import {PublicInfoCard} from '../PublicInfoCard/PublicInfoCard';
import {PublicTeamCard} from '../PublicTeamCard/PublicTeamCard';

const PublicAbout: FunctionComponent = (props) => {
    return (
        <div className="max-w-screen-lg mx-auto px-4">
            <div className="flex space-x-4">
                <PublicAboutCard className="w-1/3" />
                <PublicInfoCard className="w-2/3" />
            </div>
            <div className="flex text-2xl font-bold mt-8 mb-4">Core Team</div>
            <div className="grid grid-cols-3 gap-4">
                <PublicTeamCard />
                <PublicTeamCard />
                <PublicTeamCard />
            </div>
            <div className="flex text-2xl font-bold mt-8 mb-4">
                Contributors
            </div>
            <div className="grid grid-cols-3 gap-4">
                <PublicContributorCard />
                <PublicContributorCard />
                <PublicContributorCard />
                <PublicContributorCard />
                <PublicContributorCard />
                <PublicContributorCard />
            </div>
        </div>
    );
};

export default PublicAbout;
