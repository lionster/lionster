import {FunctionComponent} from 'react';
import {BoardsContent} from '../components/pages/boards/BoardsContent';
import {PublicLayout} from '../components/pages/PublicLayout';

const BoardsPage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <BoardsContent />
        </PublicLayout>
    );
};

export default BoardsPage;
