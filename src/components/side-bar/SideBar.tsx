import BrandLogo from 'components/side-bar/brand-logo';
import {FunctionComponent} from 'react';

export interface SideBarProps {
}

const SideBar: FunctionComponent<SideBarProps> = ({}) => {
    return (
        <div className="w-72 dark:bg-gray-800">
            <BrandLogo/>
            <div>
                SideBar
            </div>
        </div>
    );
};

export default SideBar;
