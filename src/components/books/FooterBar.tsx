import { DivAnd, DivComponent } from '../utils';

export const FooterBar: DivComponent = ({ className }) => {
    return (
        <DivAnd className="flex" and={className}>
            FooterBar
        </DivAnd>
    );
};
