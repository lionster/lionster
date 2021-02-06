import {FunctionComponent} from 'react';

export interface LayoutComponent<P = {}> extends FunctionComponent<P> {
    sideBar?: FunctionComponent;

    topBar?: FunctionComponent;
}
