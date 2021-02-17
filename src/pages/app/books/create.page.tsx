import {FunctionComponent} from 'react';
import {BooksCreateContent} from '../../../components/contents/app/books/BooksCreateContent';
import {BooksLayout} from '../../../components/contents/layouts/BooksLayout';

const BooksCreatePage: FunctionComponent = () => {
    return (
        <BooksLayout>
            <BooksCreateContent />
        </BooksLayout>
    );
};

export default BooksCreatePage;
