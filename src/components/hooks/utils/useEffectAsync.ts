import {DependencyList, useEffect} from 'react';

export function useEffectAsync<TType>(
    effect: () => Promise<TType>,
    deps: DependencyList = []
) {
    useEffect(() => {
        effect().then();
    }, deps);
}
