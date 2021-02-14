import {DivAnd, DivComponent} from '../../components/utils';
import {environment} from '../../environment/environment';

export const AboutCard: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex flex-col bg-gray-200 rounded-lg p-6" and={className}>
            <div className="font-bold text-4xl mb-6">About {environment.brandName}</div>
            <div className="mb-4">
                Email us anytime at <a href="mailto:support@example.com">support@example.com</a>.
            </div>
            <div>
                You can find our team on <a href="#">Discord</a> and on <a href="#">LinkedIn</a>.
            </div>
        </DivAnd>
    );
};
