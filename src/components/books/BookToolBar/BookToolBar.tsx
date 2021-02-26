import {DivAnd, DivComponent} from '../../utils';

export const BookToolBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            ToolBar
        </DivAnd>
    );
};
