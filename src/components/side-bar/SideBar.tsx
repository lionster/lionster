import {Logo} from 'components/logo';
import {environment} from 'environment/environment';
import {FunctionComponent} from 'react';

export interface SideBarProps {
}

const SideBar: FunctionComponent<SideBarProps> = ({}) => {
    return (
        <div className="w-72 bg-gray-200 dark:bg-gray-800">
            <div className="flex text-2xl leading-5 m-2 items-center justify-center">
                <Logo size={32}/>
                <div>{environment.brandName.toUpperCase()}</div>
            </div>
            <div>
                SideBar
            </div>
        </div>
    );
};

export default SideBar;
