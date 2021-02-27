import {FunctionComponent} from 'react';

/**
 * Component properties can extend this interface to declare support for a className.
 */
export interface DivProps {
    className?: string;

    // eslint-disable-next-line @typescript-eslint/ban-types
    style?: object;
}

/**
 * Declines a functional component that has a className property.
 */
export type DivComponent<TType extends unknown = unknown> = FunctionComponent<
    TType & DivProps
>;

/**
 * Props for the DivAnd component.
 */
export interface DivAndProps extends DivProps {
    and?: string;
}

const divJoinAnd = (className: string, and: string): string => {
    if (className && and) {
        return className + ' ' + and;
    } else if (className) {
        return className;
    } else if (and) {
        return and;
    }
    return '';
};

/**
 * Renders a div with with two className properties.
 */
export const DivAnd: FunctionComponent<DivAndProps> = ({
    className,
    and,
    style,
    children
}) => {
    return (
        <div className={divJoinAnd(className, and)} style={style}>
            {children}
        </div>
    );
};
