import {FunctionComponent} from 'react';

/**
 * Component properties can extend this interface to declare support for a className.
 */
export interface DivProps {
    className?: string;
}

/**
 * Declines a functional component that has a className property.
 */
export type DivComponent<TType extends DivProps = DivProps> = FunctionComponent<TType>;

/**
 * Props for the DivAnd component.
 */
export interface DivAndProps extends DivProps {
    and?: string;
}

/**
 * Renders a div with with two className properties.
 */
export const DivAnd: FunctionComponent<DivAndProps> = ({className, and, children}) => {
    const a = className || '';
    const b = and || '';
    return (
        <div className={(a + b).trim()}>{children}</div>
    );
};
