import {Logo} from 'components/logo';
import {DivAnd, DivComponent} from 'components/utils';
import {environment} from 'environment/environment';
import Link from 'next/link';

export interface SideBarAction {
    title: string;

    className?: string;

    route: string;
}

export interface SideBarProps {
    actions: SideBarAction[];
}

export const SideBar: DivComponent<SideBarProps> = ({className, actions}) => {
    return (
        <DivAnd className="bg-gray-200 dark:bg-gray-800 p-4" and={className}>
            <Link href="/">
                <a className="flex m-2 items-center justify-center">
                    <Logo size={32}/>
                    <span className="text-2xl leading-5">
                        {environment.brandName.toUpperCase()}
                    </span>
                </a>
            </Link>
            <div className="flex flex-col mt-6">
                {actions.map(({title, route, className}) => (
                    <Link key={route}
                          href={route}>
                        <a className={`btn mb-4 ${className || 'btn-secondary'}`}>{title}</a>
                    </Link>
                ))}
            </div>
        </DivAnd>
    );
};
