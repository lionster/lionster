import {DivAnd, DivComponent} from 'components/utils';

export const DashboardLayout: DivComponent = ({className, children}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            {children}
        </DivAnd>
    );
};
