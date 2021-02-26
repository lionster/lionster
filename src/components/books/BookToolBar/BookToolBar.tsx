import {DivAnd, DivComponent} from '../../utils/DivAnd';

export const BookToolBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            ToolBar
        </DivAnd>
    );
};
