import {BrandLogo} from '../../brand/BrandLogo';
import {DivAnd, DivComponent} from '../../utils/DivAnd';

export const PublicTeamCard: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex p-4 border rounded" and={className}>
            <BrandLogo
                className="border rounded p-1 mr-4"
                size={64}
                color="bw"
            />
            <div className="flex flex-col">
                <div className="font-bold">John Smith</div>
                <div className="text-sm">JavaScript Developer</div>
                <div className="mt-2">
                    A full stack developer in Toronto, Canada.
                </div>
            </div>
        </DivAnd>
    );
};
