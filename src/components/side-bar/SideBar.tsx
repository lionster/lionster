import {Logo} from 'components/logo';
import {environment} from 'environment/environment';
import Link from 'next/link';
import {FunctionComponent} from 'react';

export interface SideBarAction {
    title: string;

    className?: string;

    route: string;
}

export interface SideBarProps {
    className?: string;

    actions: SideBarAction[];
}

const SideBar: FunctionComponent<SideBarProps> = ({className, actions}) => {
    return (
        <div className={`bg-gray-200 dark:bg-gray-800 p-4 ${className || ''}`}>
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
        </div>
    );
};

export default SideBar;
