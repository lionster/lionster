import {Button} from '@material-ui/core';
import {FaBell, FaQuestionCircle, FaUser} from 'react-icons/fa';
import {DivAnd, DivComponent} from '../../utils';

export const DashboardBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex m-4" and={className}>
            {/*
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <BsSearch />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search boards" />
            </InputGroup>
*/}
            <Button className="ml-4">Invite Members</Button>
            <Button className="ml-4">
                <FaQuestionCircle />
            </Button>
            <Button>
                <FaBell />
            </Button>
            <Button>
                <FaUser />
            </Button>
        </DivAnd>
    );
};
