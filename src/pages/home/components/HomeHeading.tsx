import {environment} from 'environment/environment';
import Image from 'next/image';
import {FunctionComponent} from 'react';

export interface HomeHeading {
    className?: string;
}

const HomeHeading: FunctionComponent<HomeHeading> = ({className}) => {
    return (
        <div className={`flex ${className || ''}`}>
            <div className="flex-grow-1 flex-shrink-0"
                 style={{width: '256px', height: '256px'}}>
                <Image className="mb-auto"
                       src="/logos/logo-color-256.png"
                       alt={`${environment.brandName} Logo`}
                       width={256}
                       height={256}
                />
            </div>
            <div className="flex flex-col">
                <div className="text-2xl font-bold">
                    The best place to build, test and share TensorFlow models in the cloud.
                </div>
                <div>
                    {environment.brandName} is a <span>collaboration platform</span> for AI enthusiast and JavaScript
                    developers to create real-time <span>demos</span> of their ideas with as little coding as possible.
                </div>
            </div>
        </div>
    );
};

export default HomeHeading;
