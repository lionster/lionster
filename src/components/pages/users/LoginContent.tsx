import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';
import {Auth} from 'aws-amplify';
import {FunctionComponent} from 'react';

export const LoginContent: FunctionComponent = () => {
    return (
        <button
            className="btn btn-primary mx-auto mt-8"
            onClick={() =>
                Auth.federatedSignIn({
                    provider: CognitoHostedUIIdentityProvider.Google
                })
            }
        >
            Sign in with Google
        </button>
    );
};
