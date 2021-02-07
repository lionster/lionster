import {NextComponentType} from 'next/dist/next-server/lib/utils';
import {FunctionComponent} from 'react';

export interface LayoutComponent<TType = {}> extends FunctionComponent<TType> {
    layoutComponent?: NextComponentType;

    layoutProps?: any;
}
