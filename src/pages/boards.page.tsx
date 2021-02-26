import {FunctionComponent} from 'react';
import {PublicBoards} from '../components/public/PublicBooks/PublicBoards';
import {PublicLayout} from '../components/public/PublicLayout/PublicLayout';

const BoardsPage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <PublicBoards />
        </PublicLayout>
    );
};

export default BoardsPage;
