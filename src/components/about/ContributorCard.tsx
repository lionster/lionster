import {DivAnd, DivComponent} from 'components/utils';
import {FaGithub} from 'react-icons/fa';

export const ContributorCard: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex p-4 border rounded" and={className}>
            <div className="flex flex-col">
                <div className="font-bold">John Smith</div>
                <div className="text-sm">JavaScript Developer</div>
            </div>
            <FaGithub className="ml-auto my-auto text-4xl"/>
        </DivAnd>
    );
};
