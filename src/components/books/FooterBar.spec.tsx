import {getByText, render} from '@testing-library/react';
import {FooterBar} from './FooterBar';

describe(`${FooterBar.name}`, () => {
    it('should render', () => {
        const {container} = render(<FooterBar/>);
        expect(getByText(container, 'FooterBar')).toBeInTheDocument();
    });
});
