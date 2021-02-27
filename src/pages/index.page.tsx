import {FunctionComponent} from 'react';
import PublicHome from '../components/public/PublicHome/PublicHome';
import {PublicLayout} from '../components/public/PublicLayout/PublicLayout';
import {PageTitle, PageTitleStyle} from '../components/utils/PageTitle';
import {environment} from '../environment/environment';

const HomePage: FunctionComponent = () => {
    return (
        <>
            <PageTitle
                title={`${environment.brandName} | ${environment.brandSlogan}`}
                style={PageTitleStyle.FULL}
            />
            <PublicLayout>
                <PublicHome />
            </PublicLayout>
        </>
    );
};

export default HomePage;
