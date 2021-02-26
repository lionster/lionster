import {DivAnd, DivComponent} from '../../utils';
import {BookTemplates} from '../BookTemplates/BookTemplates';

export const BookList: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-2xl font-bold mb-8 mt-2">All boards</div>
            <BookTemplates />
        </DivAnd>
    );
};
