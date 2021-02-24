import {TextField} from '@material-ui/core';
import {DivAnd, DivComponent} from '../utils';

export const SearchBar: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            <form className="flex w-full" noValidate autoComplete="off">
                <TextField fullWidth label="Standard" />
            </form>
        </DivAnd>
    );
};
