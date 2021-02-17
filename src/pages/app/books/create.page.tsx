import {LayoutComponent} from '../../../components/layouts';
import {BooksCreateContent} from '../../../components/pages/app/books/BooksCreateContent';
import {BooksLayout} from '../../../components/pages/app/books/BooksLayout';

const BooksCreatePage: LayoutComponent = () => {
    return <BooksCreateContent />;
};

BooksCreatePage.layoutComponent = BooksLayout;

export default BooksCreatePage;
