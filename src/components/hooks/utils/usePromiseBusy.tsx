/* eslint-disable @typescript-eslint/no-explicit-any */
import {DependencyList, useState} from 'react';
import {usePromise} from './usePromise';

/**
 * Creates a callback that wraps a promise in an error handler with a busy
 * indicator.
 */
export function usePromiseBusy<TType extends (...args: any[]) => Promise<any>>(
    callback: TType,
    deps: DependencyList = [],
    startBusy?: boolean
): [boolean, TType] {
    const [busy, setBusy] = useState(Boolean(startBusy));
    const cb = usePromise(async (...args) => {
        try {
            setBusy(true);
            return await callback(...args);
        } finally {
            setBusy(false);
        }
    }, deps);
    return [busy, cb as any];
}
