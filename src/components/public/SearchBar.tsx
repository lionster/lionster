import {FormControl, InputGroup} from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import {DivAnd, DivComponent} from '../utils';

export const SearchBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <BsSearch />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search" />
            </InputGroup>
        </DivAnd>
    );
};
