import {DivAnd, DivComponent} from 'components/utils';
import {FaPlus} from 'react-icons/fa';

export const BoardTemplates: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            <button className="flex btn btn-primary w-28 h-28">
                <div className="flex flex-col">
                    <FaPlus className="mx-auto mb-2"/>
                    <div>New Board</div>
                </div>
            </button>
        </DivAnd>
    );
};
