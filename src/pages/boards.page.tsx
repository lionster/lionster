import {FunctionComponent} from 'react';
import {PublicBoards} from '../components/public/PublicBooks/PublicBoards';
import {PublicLayout} from '../components/public/PublicLayout/PublicLayout';
import {PageTitle} from '../components/utils/PageTitle';

const BoardsPage: FunctionComponent = () => {
    return (
        <>
            <PageTitle title="Boards" />
            <PublicLayout>
                <PublicBoards />
            </PublicLayout>
        </>
    );
};

export default BoardsPage;
