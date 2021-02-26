import {environment} from '../../../environment/environment';
import {BrandLogo} from '../../brand/BrandLogo';
import {DivAnd, DivComponent} from '../../utils';

export const PublicCard: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            <BrandLogo size={256} />
            <div className="flex flex-col">
                <div className="text-2xl font-bold">
                    The best place to build, test and share TensorFlow models in
                    the cloud.
                </div>
                <div>
                    {environment.brandName} is a{' '}
                    <span>collaboration platform</span> for AI enthusiast and
                    JavaScript developers to create real-time <span>demos</span>{' '}
                    of their ideas with as little coding as possible.
                </div>
            </div>
        </DivAnd>
    );
};
