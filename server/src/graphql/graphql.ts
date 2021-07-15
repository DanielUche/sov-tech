
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class StarWar {
    name?: Nullable<string>;
    gender?: Nullable<string>;
    height?: Nullable<string>;
    mass?: Nullable<string>;
    homeworld?: Nullable<string>;
}

export abstract class IQuery {
    abstract getCount(): Nullable<number> | Promise<Nullable<number>>;

    abstract getPeople(page: number): Nullable<StarWar[]> | Promise<Nullable<StarWar[]>>;

    abstract getPerson(name: string): Nullable<StarWar> | Promise<Nullable<StarWar>>;
}

type Nullable<T> = T | null;
