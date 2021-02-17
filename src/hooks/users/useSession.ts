import {CognitoUserSession} from 'amazon-cognito-identity-js';
import {Auth} from 'aws-amplify';
import {useState} from 'react';
import {useEffectAsync} from '../utils';

export interface SessionState {
    error?: string;

    session?: CognitoUserSession;

    status: 'loading' | 'loaded' | 'error';
}

export function useSession(): SessionState {
    const [state, setState] = useState<SessionState>({status: 'loading'});
    useEffectAsync(async () => {
        try {
            const session = await Auth.currentSession();
            setState({status: 'loaded', session});
        } catch (err) {
            setState({status: 'error', error: err.message || 'Unknown error'});
        }
    });
    return state;
}
