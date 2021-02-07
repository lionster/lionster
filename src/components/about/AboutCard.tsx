import {withDiv} from 'components/utils';
import {environment} from 'environment/environment';

export const AboutCard = withDiv('flex flex-col', ({}) => {
    return (
        <>
            <div>About {environment.brandName}</div>
            <div>
                Email us anytime at <a href="mailto:support@example.com">support@example.com</a>.
            </div>
            <div>
                You can find our team on Discord and on LinkedIn.
            </div>
        </>
    );
});
