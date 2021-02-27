/* eslint-disable @typescript-eslint/no-explicit-any */
import {DependencyList, useCallback} from 'react';
import {useToast} from './useToast';

/**
 * Creates a callback that wraps a promise in an error handler.
 */
export function usePromise<TType extends (...args: any[]) => Promise<any>>(
    callback: TType,
    deps: DependencyList = []
): TType {
    const toast = useToast('error', true);
    const cb = async (...args: any[]): Promise<any> => {
        try {
            return await callback(...args);
        } catch (err) {
            toast(err.message || 'An unhandled error');
            console.error(err);
        }
    };
    // @todo couldn't fix the typing
    return useCallback<TType>(cb as any, deps);
}
