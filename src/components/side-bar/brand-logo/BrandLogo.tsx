import {environment} from 'environment/environment';
import Image from 'next/image';
import {FunctionComponent} from 'react';

export interface BrandLogoProps {

}

const BrandLogo: FunctionComponent<BrandLogoProps> = ({}) => {
    return (
        <div className="flex text-2xl leading-5 m-2 items-center justify-center">
            <Image src="/logos/logo-color-32.png"
                   alt={`${environment.brandName} Logo`}
                   width={32}
                   height={32}
            />
            <div>{environment.brandName.toUpperCase()}</div>
        </div>
    );
};

export default BrandLogo;
