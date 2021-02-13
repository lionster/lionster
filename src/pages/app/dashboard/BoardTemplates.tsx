import Link from 'next/link';
import {DivAnd, DivComponent} from 'components/utils';
import {FaPlus} from 'react-icons/fa';

export const BoardTemplates: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex" and={className}>
            <Link href="/app/books/create">
                <button className="flex btn btn-primary w-28 h-28">
                    <div className="flex flex-col">
                        <FaPlus className="mx-auto mb-2"/>
                        <div>New Board</div>
                    </div>
                </button>
            </Link>
        </DivAnd>
    );
};
