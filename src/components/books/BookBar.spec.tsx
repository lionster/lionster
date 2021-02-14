import {getByText, render} from '@testing-library/react';
import {BookEntity} from '../../entities/book-entity';
import {BookBar} from './BookBar';

describe(`${BookBar.name}`, () => {
    it('should render', () => {
        const book: BookEntity = {id: '1', title: 'Book Title', favorite: true};
        const {container} = render(<BookBar book={book}/>);
        expect(getByText(container, 'Book Title')).toBeInTheDocument();
    });
});
