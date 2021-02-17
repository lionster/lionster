import {FunctionComponent} from 'react';
import HomeContent from '../components/home/HomeContent';
import {PublicLayout} from '../components/pages/PublicLayout';

const HomePage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <HomeContent />
        </PublicLayout>
    );
};

export default HomePage;
