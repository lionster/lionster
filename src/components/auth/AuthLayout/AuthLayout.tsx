import {Button} from '@material-ui/core';
import Link from 'next/link';
import {BrandName} from '../../brand/BrandName';
import {ROUTES} from '../../routes/routes.types';
import {DivAnd, DivComponent} from '../../utils/DivAnd';
import {AUTH_BUTTON_TERMS} from '../auth.types';

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
                <Link href={ROUTES.LOG_IN}>
                    <Button className="ml-auto">
                        {AUTH_BUTTON_TERMS.LOG_IN}
                    </Button>
                </Link>
            );
        } else if (backType === BackType.register) {
            return (
                <Link href={ROUTES.REGISTER}>
                    <Button className="ml-auto">
                        {AUTH_BUTTON_TERMS.REGISTER}
                    </Button>
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
                {backType === BackType.login && (
                    <Link href={ROUTES.LOG_IN}>
                        <a className="mt-4">
                            Return to{' '}
                            {AUTH_BUTTON_TERMS.LOG_IN.toLocaleLowerCase()}.
                        </a>
                    </Link>
                )}
            </div>
        </DivAnd>
    );
};
