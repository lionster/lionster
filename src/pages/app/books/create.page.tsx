import {FunctionComponent} from 'react';
import {BookCreate} from '../../../components/books/BookCreate/BookCreate';
import {BookLayout} from '../../../components/books/BookLayout/BookLayout';

const BooksCreatePage: FunctionComponent = () => {
    return (
        <BookLayout>
            <BookCreate />
        </BookLayout>
    );
};

export default BooksCreatePage;
