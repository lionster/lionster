import {DivAnd, DivComponent} from '../../utils';

export const BookUserBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            UserBar
        </DivAnd>
    );
};
