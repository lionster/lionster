import {DivAnd, DivComponent} from '../../utils';

export const UsersLayout: DivComponent = ({className, children}) => {
    return (
        <DivAnd
            className="flex flex-col max-w-screen-lg mx-auto"
            and={className}
        >
            {children}
        </DivAnd>
    );
};
