import Link from 'next/link';
import {FunctionComponent} from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
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
            <Link href="/register">
                <a className="flex whitespace-nowrap ml-2 btn btn-primary">
                    Sign Up
                </a>
            </Link>
            <Link href="/login">
                <a className="flex whitespace-nowrap ml-2 btn btn-secondary">
                    Log In
                </a>
            </Link>
        </div>
    );
};
