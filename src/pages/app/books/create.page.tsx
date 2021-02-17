import {FunctionComponent} from 'react';
import {BooksCreateContent} from '../../../components/pages/app/books/BooksCreateContent';
import {BooksLayout} from '../../../components/pages/app/books/BooksLayout';

const BooksCreatePage: FunctionComponent = () => {
    return (
        <BooksLayout>
            <BooksCreateContent />
        </BooksLayout>
    );
};

export default BooksCreatePage;
