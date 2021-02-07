import {BoardTemplates} from './BoardTemplates';
import {DivAnd, DivComponent} from 'components/utils';

export const BooksList: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-2xl font-bold mb-8 mt-2">
                All boards
            </div>
            <BoardTemplates/>
        </DivAnd>
    );
};
