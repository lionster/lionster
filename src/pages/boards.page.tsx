import {FunctionComponent} from 'react';
import {BoardsContent} from '../components/contents/boards/BoardsContent';
import {PublicLayout} from '../components/contents/layouts/PublicLayout';

const BoardsPage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <BoardsContent />
        </PublicLayout>
    );
};

export default BoardsPage;
