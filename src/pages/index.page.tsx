import {FunctionComponent} from 'react';
import HomeContent from '../components/contents/HomeContent';
import {PublicLayout} from '../components/contents/layouts/PublicLayout';

const HomePage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <HomeContent />
        </PublicLayout>
    );
};

export default HomePage;
