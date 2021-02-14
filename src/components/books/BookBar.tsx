import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { BookEntity } from '../../entities/book-entity';
import { environment } from '../../environment/environment';
import { DivAnd, DivComponent } from '../utils';




export interface BookBarProps {
    book: BookEntity;
}

export const BookBar: DivComponent<BookBarProps> = ({ className, book }) => {
    return (
        <DivAnd className="inline-flex align-middle" and={className}>
            <Link href="/app/dashboard">
                <a className="btn font-bold">{environment.brandName}</a>
            </Link>
            <button className="btn">{book.title}</button>
            <button className="btn">
                <FaStar />
            </button>
        </DivAnd>
    );
};
