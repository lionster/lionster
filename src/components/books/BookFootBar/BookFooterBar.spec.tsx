import {getByText, render} from '@testing-library/react';
import {BookFooterBar} from './BookFooterBar';

describe(`${BookFooterBar.name}`, () => {
    it('should render', () => {
        const {container} = render(<BookFooterBar />);
        expect(getByText(container, 'FooterBar')).toBeInTheDocument();
    });
});
