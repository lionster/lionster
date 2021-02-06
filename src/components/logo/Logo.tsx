import {environment} from 'environment/environment';
import Image from 'next/image';
import {FunctionComponent} from 'react';

export interface LogoProps {
    className?: string;

    size: number;

    fileSize?: number;
}

export const Logo: FunctionComponent<LogoProps> = ({className, size, fileSize}) => {
    return (
        <div className={`flex-grow-1 flex-shrink-0 ${className || ''}`}
             style={{width: `${size}px`, height: `${size}px`}}>
            <Image className="mb-auto"
                   src={`/logos/logo-color-${fileSize || size}.png`}
                   alt={`${environment.brandName} Logo`}
                   width={size}
                   height={size}
            />
        </div>
    );
};
