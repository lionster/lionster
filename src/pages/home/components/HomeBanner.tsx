import {FunctionComponent} from 'react';

export interface HomeBannerProps {
    title: string;

    description: string;
}

const HomeBanner: FunctionComponent<HomeBannerProps> = ({title, description}) => {
    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
};

export default HomeBanner;
