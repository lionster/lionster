import {UsersLayout} from 'components/users';
import Link from 'next/link';
import {FunctionComponent} from 'react';

const LoginPage: FunctionComponent = () => {
    return (
        <UsersLayout>
            <div>Placeholder, will be replaced by AWS Amplify form component.</div>
            <Link href="/dashboard">
                <a className="btn btn-primary mx-auto mt-8">
                    Continue
                </a>
            </Link>
        </UsersLayout>
    );
};

export default LoginPage;
