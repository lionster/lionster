import {FunctionComponent} from 'react';
import PublicHome from '../components/public/PublicHome/PublicHome';
import {PublicLayout} from '../components/public/PublicLayout/PublicLayout';

const HomePage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <PublicHome />
        </PublicLayout>
    );
};

export default HomePage;
