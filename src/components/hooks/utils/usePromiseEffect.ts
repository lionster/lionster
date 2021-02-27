import {DependencyList, useEffect} from 'react';
import {usePromise} from './usePromise';

export function usePromiseEffect<TType>(
    effect: () => Promise<TType>,
    deps?: DependencyList
) {
    const promise = usePromise(effect, deps);
    useEffect(() => {
        promise().then();
    }, deps);
}
