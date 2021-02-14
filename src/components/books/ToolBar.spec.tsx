import {getByText, render} from '@testing-library/react';
import {ToolBar} from './ToolBar';

describe(`${ToolBar.name}`, () => {
    it('should render', () => {
        const {container} = render(<ToolBar/>);
        expect(getByText(container, 'ToolBar')).toBeInTheDocument();
    });
});
