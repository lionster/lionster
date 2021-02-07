import {DivAnd, DivComponent} from 'components/utils';

export const UserBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            UserBar
        </DivAnd>
    );
};
