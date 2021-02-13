import Link from 'next/link';
import {FunctionComponent} from 'react';
import {UsersLayout} from '../UsersLayout';

const RegisterPage: FunctionComponent = () => {
    return (
        <UsersLayout>
            <div>Placeholder, will be replaced by AWS Amplify form component.</div>
            <Link href="/app/dashboard">
                <a className="btn btn-primary mx-auto mt-8">
                    Continue
                </a>
            </Link>
        </UsersLayout>
    );
};

export default RegisterPage;
