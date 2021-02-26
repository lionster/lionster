import Link from 'next/link';
import {environment} from '../../environment/environment';
import {DivAnd, DivComponent} from '../utils';

export interface BrandNameProps {
    href?: string;
}

export const BrandName: DivComponent<BrandNameProps> = ({className, href}) => {
    return (
        <DivAnd className="flex font-bold" and={className}>
            <Link href={href || '/'}>
                <a>{environment.brandName}</a>
            </Link>
        </DivAnd>
    );
};
