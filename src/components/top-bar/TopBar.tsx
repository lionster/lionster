import {FunctionComponent} from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';

export interface TopBarProps {
    className?: string;
}

export const TopBar: FunctionComponent<TopBarProps> = ({className}) => {
    return (
        <div className={`flex p-4 ${className || ''}`}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text><BsSearch/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search"/>
            </InputGroup>
            <Button className="flex whitespace-nowrap ml-2"
            >
                Sign Up
            </Button>
            <Button className="flex whitespace-nowrap ml-2"
                    variant="secondary"
            >
                Log In
            </Button>
        </div>
    );
};
