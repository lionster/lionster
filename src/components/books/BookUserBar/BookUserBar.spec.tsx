import {getByText, render} from '@testing-library/react';
import {BookUserBar} from './BookUserBar';

describe(`${BookUserBar.name}`, () => {
    it('should render', () => {
        const {container} = render(<BookUserBar />);
        expect(getByText(container, 'BookUserBar')).toBeInTheDocument();
    });
});
