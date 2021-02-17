import {FunctionComponent} from 'react';
import {BooksList} from './BooksList';
import {DashboardBar} from './DashboardBar';

export const DashboardContent: FunctionComponent = () => {
    return (
        <>
            <DashboardBar />
            <BooksList className="mx-4" />
        </>
    );
};
