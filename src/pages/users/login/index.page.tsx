import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';
import {Auth} from 'aws-amplify';
import {FunctionComponent} from 'react';
import {UsersLayout} from '../UsersLayout';

const LoginPage: FunctionComponent = () => {
    return (
        <UsersLayout>
            <div>
                Placeholder, will be replaced by AWS Amplify form component.
            </div>
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

export default LoginPage;
