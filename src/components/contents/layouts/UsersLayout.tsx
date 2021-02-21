import Link from 'next/link';
import {BrandName} from '../../branding';
import {DivAnd, DivComponent} from '../../utils';

export enum BackType {
    none,
    login,
    register
}

export interface UsersLayoutProps {
    backType?: BackType;
}

export const UsersLayout: DivComponent<UsersLayoutProps> = ({
    className,
    children,
    backType
}) => {
    const renderBack = () => {
        if (backType === BackType.login) {
            return (
                <Link href="/users/login">
                    <a className="btn btn-outline-primary ml-auto">Sign in</a>
                </Link>
            );
        } else if (backType === BackType.register) {
            return (
                <Link href="/users/register">
                    <a className="btn btn-outline-primary ml-auto">Sign up</a>
                </Link>
            );
        }
    };

    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="flex m-4">
                <BrandName className="text-3xl" />
                {renderBack()}
            </div>
            <div className="flex flex-col max-w-sm w-full mx-auto">
                {children}
            </div>
        </DivAnd>
    );
};
