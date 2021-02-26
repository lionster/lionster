import {CognitoUser} from 'amazon-cognito-identity-js';
import {Auth} from 'aws-amplify';
import {useState} from 'react';
import {useEffectAsync} from '../utils';

export interface UserState {
    error?: string;

    status: 'loading' | 'loaded' | 'error';

    user?: CognitoUser;
}

export function useUser(): UserState {
    const [state, setState] = useState<UserState>({status: 'loading'});
    useEffectAsync(async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setState({status: 'loaded', user});
        } catch (err) {
            setState({status: 'error', error: err.message || 'Unknown error'});
        }
    });
    return state;
}
