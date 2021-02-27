import {FunctionComponent} from 'react';
import {PageTitle} from '../../utils/PageTitle';

export interface AuthHeadingProps {
    title: string;
}

export const AuthHeading: FunctionComponent<AuthHeadingProps> = ({title}) => {
    return (
        <>
            <PageTitle title={title} />
            <div className="text-lg font-bold mx-auto mb-3">{title}</div>
        </>
    );
};
