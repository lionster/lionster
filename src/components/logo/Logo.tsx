import {DivAnd, DivComponent} from 'components/utils';
import {environment} from 'environment/environment';
import Image from 'next/image';

export interface LogoProps {
    size: number;

    fileSize?: number;
}

export const Logo: DivComponent<LogoProps> = ({className, size, fileSize}) => {
    return (
        <DivAnd className="flex-grow-1 flex-shrink-0"
                and={className}
                style={{width: `${size}px`, height: `${size}px`}}
        >
            <Image className="mb-auto"
                   src={`/logos/logo-color-${fileSize || size}.png`}
                   alt={`${environment.brandName} Logo`}
                   width={size}
                   height={size}
            />
        </DivAnd>
    );
};
