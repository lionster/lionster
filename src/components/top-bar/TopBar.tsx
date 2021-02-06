import {FunctionComponent} from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

export interface TopBarProps {
    className?: string;
}

const TopBar: FunctionComponent<TopBarProps> = ({className}) => {
    return (
        <div className={`flex p-4 ${className || ''}`}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search"/>
            </InputGroup>
            <Button className="flex whitespace-nowrap ml-2">Sign Up</Button>
            <Button className="flex whitespace-nowrap ml-2">Log In</Button>
        </div>
    );
};

export default TopBar;
