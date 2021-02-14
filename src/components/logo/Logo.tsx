import Image from 'next/image';
import {environment} from '../../environment/environment';
import {DivAnd, DivComponent} from '../utils';

export interface LogoProps {
    size: 512 | 256 | 128 | 64 | 32;

    fileSize?: number;

    color?: 'color' | 'bw';
}

export const Logo: DivComponent<LogoProps> = ({
    className,
    size,
    fileSize,
    color
}) => {
    return (
        <DivAnd
            className="flex-grow-1 flex-shrink-0"
            and={className}
            style={{width: `${size}px`, height: `${size}px`}}
        >
            <Image
                src={`/logos/logo-${color || 'color'}-${fileSize || size}.png`}
                alt={`${environment.brandName} Logo`}
                width={size}
                height={size}
            />
        </DivAnd>
    );
};
