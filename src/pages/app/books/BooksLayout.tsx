import {BookBar, FooterBar, ToolBar, UserBar, ZoomBar} from '../../../components/books';
import {DivAnd, DivComponent} from '../../../components/utils';
import {BookEntity} from '../../../entities/book-entity';

export const BooksLayout: DivComponent = ({className, children}) => {
    const book: BookEntity = {
        id: null,
        title: 'Example',
        favorite: false
    };
    return (
        <DivAnd className="flex flex-grow bg-gray-100" and={className}>
            <div className="flex flex-col w-full">
                {children}
            </div>
            <UserBar className="absolute top-4 right-4 bg-white rounded shadow-lg"/>
            <div className="flex absolute left-4 top-4 bottom-4">
                <ToolBar className="bg-white mt-auto mb-auto rounded shadow-lg"/>
            </div>
            <FooterBar className="absolute bottom-4 left-4 bg-white rounded shadow-lg"/>
            <ZoomBar className="absolute bottom-4 right-4 bg-white rounded shadow-lg"/>
            <BookBar className="absolute top-4 left-4 bg-white rounded shadow-lg"
                     book={book}
            />
        </DivAnd>
    );
};
