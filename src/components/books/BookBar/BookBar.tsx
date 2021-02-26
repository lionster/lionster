import {FaStar} from 'react-icons/fa';
import {BookEntity} from '../../entities/book-entity';
import {BrandName} from '../../brand/BrandName';
import {DivAnd, DivComponent} from '../../utils';

export interface BookBarProps {
    book: BookEntity;
}

export const BookBar: DivComponent<BookBarProps> = ({className, book}) => {
    return (
        <DivAnd className="inline-flex align-middle" and={className}>
            <BrandName className="brn" href={'/app/dashboard'} />
            <button className="btn">{book.title}</button>
            <button className="btn">
                <FaStar />
            </button>
        </DivAnd>
    );
};
