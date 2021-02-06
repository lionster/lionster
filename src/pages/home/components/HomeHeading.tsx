import {FunctionComponent} from 'react';
import {environment} from '../../../environment/environment';

export interface HomeHeading {

}

const HomeHeading: FunctionComponent<HomeHeading> = () => {
    return (
        <div>
            <div>Image</div>
            <h1>The best place to build, test and share TensorFlow models in the cloud.</h1>
            <div>
                {environment.brandName} is a <span>collaboration platform</span> for AI enthusiast and JavaScript
                developers to create real-time <span>demos</span> of their ideas with as little coding as possible.
            </div>
        </div>
    );
};

export default HomeHeading;
