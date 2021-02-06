import {FunctionComponent} from 'react';

export interface TopBarProps {
}

const TopBar: FunctionComponent<TopBarProps> = () => {
    return (
        <div className="flex border-b">
            TopBar
        </div>
    );
};

export default TopBar;
