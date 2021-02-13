import {Entity} from 'entities/entity';

export interface BookEntity extends Entity {
    favorite: boolean;

    title: string;
}
