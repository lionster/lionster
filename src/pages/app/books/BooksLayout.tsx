import {DivAnd, DivComponent} from 'components/utils';

export const BooksLayout: DivComponent = ({className, children}) => {
    return (
        <DivAnd className="flex flex-grow" and={className}>
            <div className="flex flex-col w-full">
                {children}
            </div>
        </DivAnd>
    );
};
