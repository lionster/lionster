import {getByText, render} from '@testing-library/react';
import {BookZoomBar} from './BookZoomBar';

describe(`${BookZoomBar.name}`, () => {
    it('should render', () => {
        const {container} = render(<BookZoomBar />);
        expect(getByText(container, 'ZoomBar')).toBeInTheDocument();
    });
});
