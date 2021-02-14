import { DivAnd, DivComponent } from '../utils';

export const ToolBar: DivComponent = ({ className }) => {
    return (
        <DivAnd className="flex" and={className}>
            ToolBar
        </DivAnd>
    );
};
