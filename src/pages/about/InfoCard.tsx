import {DivAnd, DivProps} from 'components/utils';
import {environment} from 'environment/environment';
import {FunctionComponent} from 'react';

export const InfoCard: FunctionComponent<DivProps> = ({className}) => {
    return (
        <DivAnd className="flex flex-col p-6" and={className}>
            <span className="font-bold">{environment.brandName} is an open source project.</span> At its heart,
            is a team of software developers who volunteered their time and experience to create this amazing
            project.
        </DivAnd>
    );
};
