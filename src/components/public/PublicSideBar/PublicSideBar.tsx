import Link from 'next/link';
import {environment} from '../../../environment/environment';
import {BrandLogo} from '../../brand/BrandLogo';
import {DivAnd, DivComponent} from '../../utils/DivAnd';

export interface PublicSideBarAction {
    title: string;

    className?: string;

    route: string;
}

export interface PublicSideBarProps {
    actions: PublicSideBarAction[];
}

export const PublicSideBar: DivComponent<PublicSideBarProps> = ({
    className,
    actions
}) => {
    return (
        <DivAnd className="bg-gray-200 dark:bg-gray-800 p-4" and={className}>
            <Link href="/">
                <a className="flex m-2 items-center justify-center">
                    <BrandLogo size={32} />
                    <span className="text-2xl leading-5">
                        {environment.brandName.toUpperCase()}
                    </span>
                </a>
            </Link>
            <div className="flex flex-col mt-6">
                {actions.map(({title, route, className}) => (
                    <Link key={route} href={route}>
                        <a
                            className={`btn mb-4 ${
                                className || 'btn-secondary'
                            }`}
                        >
                            {title}
                        </a>
                    </Link>
                ))}
            </div>
        </DivAnd>
    );
};
