import Head from 'next/head';
import {FunctionComponent} from 'react';
import {environment} from '../../environment/environment';

export enum PageTitleStyle {
    SIMPLE,
    FULL
}

export interface PageTitleProps {
    title: string;

    style?: PageTitleStyle;
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({
    title,
    style
}) => {
    return (
        <Head>
            <title>
                {style === PageTitleStyle.FULL
                    ? title
                    : `${title} | ${environment.brandName}`}
            </title>
        </Head>
    );
};

PageTitle.defaultProps = {
    style: PageTitleStyle.SIMPLE
};
