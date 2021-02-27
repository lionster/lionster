import {DivAnd, DivComponent} from '../../utils/DivAnd';

export const BookUserBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            UserBar
        </DivAnd>
    );
};
