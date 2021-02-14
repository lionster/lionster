import Link from 'next/link';
import {FormControl, InputGroup} from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import {DivAnd, DivComponent} from '../utils';

export const SearchBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex p-4" and={className}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text><BsSearch/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search"/>
            </InputGroup>
            <Link href="/users/register">
                <a className="flex whitespace-nowrap ml-2 btn btn-primary">
                    Sign Up
                </a>
            </Link>
            <Link href="/users/login">
                <a className="flex whitespace-nowrap ml-2 btn btn-secondary">
                    Log In
                </a>
            </Link>
        </DivAnd>
    );
};
