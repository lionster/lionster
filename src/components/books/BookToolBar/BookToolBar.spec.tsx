import {getByText, render} from '@testing-library/react';
import {BookToolBar} from './BookToolBar';

describe(`${BookToolBar.name}`, () => {
    it('should render', () => {
        const {container} = render(<BookToolBar />);
        expect(getByText(container, 'ToolBar')).toBeInTheDocument();
    });
});
