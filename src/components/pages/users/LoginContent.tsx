import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';
import {Auth} from 'aws-amplify';
import {FunctionComponent} from 'react';
import {UsersLayout} from './UsersLayout';

export const LoginContent: FunctionComponent = () => {
    return (
        <UsersLayout>
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
        </UsersLayout>
    );
};
