import {Head} from 'next/document';
import {environment} from 'shared/environment/environment';
import {LayoutComponent} from 'shared/layouts/layouts.types';
import banners from './banners.json';
import HomeBanner from './components/HomeBanner';
import HomeHeading from './components/HomeHeading';

export interface HomePageProps {
}

const HomePage: LayoutComponent<HomePageProps> = () => {
    return (
        <>
            <Head>
                <title>{environment.brandName} | Online machine learning playground</title>
            </Head>
            <HomeHeading/>
            {
                banners.map(({title, description}) =>
                    <HomeBanner key={title}
                                title={title}
                                description={description}/>
                )
            }
        </>
    );
};

export default HomePage;
