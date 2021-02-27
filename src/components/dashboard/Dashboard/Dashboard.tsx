import {FunctionComponent} from 'react';
import {BookList} from '../../books/BookList/BookList';
import {DashboardBar} from '../DashboardBar/DashboardBar';

export const Dashboard: FunctionComponent = () => {
    return (
        <>
            <DashboardBar />
            <BookList className="mx-4" />
        </>
    );
};
