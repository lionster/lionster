import {DivAnd, DivComponent} from '../../utils/DivAnd';

export const BookZoomBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            ZoomBar
        </DivAnd>
    );
};
