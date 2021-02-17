import {Logo} from '../branding';
import {DivAnd, DivComponent} from '../utils';

export const TeamCard: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex p-4 border rounded" and={className}>
            <Logo className="border rounded p-1 mr-4" size={64} color="bw" />
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
