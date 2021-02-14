import {getByText, render} from '@testing-library/react';
import {ZoomBar} from './ZoomBar';

describe(`${ZoomBar.name}`, () => {
    it('should render', () => {
        const {container} = render(<ZoomBar/>);
        expect(getByText(container, 'ZoomBar')).toBeInTheDocument();
    });
});
