import {DivAnd, DivComponent} from '../utils';

export const UserBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            UserBar
        </DivAnd>
    );
};
