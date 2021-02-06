import {FunctionComponent} from 'react';

export interface SideBarProps {
}

const SideBar: FunctionComponent<SideBarProps> = ({}) => {
    return (
        <div className="w-72 border-r">
            SideBar
        </div>
    );
};

export default SideBar;
