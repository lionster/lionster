import {getByText, render} from '@testing-library/react';
import {UserBar} from './UserBar';

describe(`${UserBar.name}`, () => {
    it('should render', () => {
        const {container} = render(<UserBar/>);
        expect(getByText(container, 'UserBar')).toBeInTheDocument();
    });
});
