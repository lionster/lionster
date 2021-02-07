import {FunctionComponent} from 'react';

export interface WithDivProps {
    className?: string;
}

/**
 * Wraps the component with a div that has a className and includes a className passed via the props.
 */
export function withDiv<TType extends WithDivProps = WithDivProps>(
    className: string,
    Component: FunctionComponent<TType>
): FunctionComponent<TType> {
    return (props: TType) => {
        return (
            <div className={`${className} ${props.className || ''}`}>
                <Component {...props}/>
            </div>
        );
    };
}
