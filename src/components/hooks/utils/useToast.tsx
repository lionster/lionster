import {useSnackbar, VariantType} from 'notistack';
import {useCallback} from 'react';

export function useToast(variant: VariantType = 'default', persist?: boolean) {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    return useCallback(
        (message: string) => {
            const action = persist
                ? (key) => (
                      <button onClick={() => closeSnackbar(key)}>
                          Dismiss
                      </button>
                  )
                : undefined;
            enqueueSnackbar(message, {
                variant,
                persist: Boolean(persist),
                action
            });
        },
        [variant, persist]
    );
}
