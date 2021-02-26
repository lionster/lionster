import {Button} from '@material-ui/core';
import Link from 'next/link';
import {BrandName} from '../../brand/BrandName';
import {DivAnd, DivComponent} from '../../utils';

export enum BackType {
    none,
    login,
    register
}

export interface UsersLayoutProps {
    backType?: BackType;
}

export const AuthLayout: DivComponent<UsersLayoutProps> = ({
    className,
    children,
    backType
}) => {
    const renderBack = () => {
        if (backType === BackType.login) {
            return (
                <Link href="/users/login">
                    <Button className="ml-auto">Sign in</Button>
                </Link>
            );
        } else if (backType === BackType.register) {
            return (
                <Link href="/users/register">
                    <Button className="ml-auto">Sign up</Button>
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
