import {useSnackbar} from 'notistack';
import {DependencyList, useCallback} from 'react';

export function usePromise<TType extends (...args: any[]) => Promise<any>>(
    callback: TType,
    deps: DependencyList = []
): TType {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const cb = async (...args: any[]): Promise<any> => {
        try {
            return await callback(...args);
        } catch (err) {
            enqueueSnackbar(err.message || 'An unhandled error', {
                variant: 'error',
                persist: true,
                action: (key) => (
                    <button onClick={() => closeSnackbar(key)}>Dismiss</button>
                )
            });
        }
    };
    // @todo couldn't fix the typing
    return useCallback<TType>(cb as any, deps);
}
