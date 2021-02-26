import {BookEntity} from '../../entities/book-entity';
import {BookBar} from '../BookBar/BookBar';
import {BookFooterBar} from '../BookFootBar/BookFooterBar';
import {BookToolBar} from '../BookToolBar/BookToolBar';
import {BookUserBar} from '../BookUserBar/BookUserBar';
import {BookZoomBar} from '../BookZoomBar/BookZoomBar';
import {DivAnd, DivComponent} from '../../utils';

export const BookLayout: DivComponent = ({className, children}) => {
    const book: BookEntity = {
        id: null,
        title: 'Example',
        favorite: false
    };
    return (
        <DivAnd className="flex flex-grow bg-gray-100" and={className}>
            <div className="flex flex-col w-full">{children}</div>
            <BookUserBar className="absolute top-4 right-4 bg-white rounded shadow-lg" />
            <div className="flex absolute left-4 top-4 bottom-4">
                <BookToolBar className="bg-white mt-auto mb-auto rounded shadow-lg" />
            </div>
            <BookFooterBar className="absolute bottom-4 left-4 bg-white rounded shadow-lg" />
            <BookZoomBar className="absolute bottom-4 right-4 bg-white rounded shadow-lg" />
            <BookBar
                className="absolute top-4 left-4 bg-white rounded shadow-lg"
                book={book}
            />
        </DivAnd>
    );
};
