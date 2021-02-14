import {Entity} from './entity';

export interface BookEntity extends Entity {
    favorite: boolean;

    title: string;
}
