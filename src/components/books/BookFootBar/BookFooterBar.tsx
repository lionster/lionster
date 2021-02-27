import {DivAnd, DivComponent} from '../../utils/DivAnd';

export const BookFooterBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            FooterBar
        </DivAnd>
    );
};
