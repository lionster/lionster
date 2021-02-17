import {FormControl, InputGroup} from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import {FaBell, FaQuestionCircle, FaUser} from 'react-icons/fa';
import {DivAnd, DivComponent} from '../../../utils';

export const DashboardBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex m-4" and={className}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <BsSearch />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search boards" />
            </InputGroup>
            <button className="btn btn-outline-secondary whitespace-nowrap ml-4">
                Invite Members
            </button>
            <button className="btn ml-4">
                <FaQuestionCircle />
            </button>
            <button className="btn">
                <FaBell />
            </button>
            <button className="btn">
                <FaUser />
            </button>
        </DivAnd>
    );
};
