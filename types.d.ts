export interface Gengre {
    id: number
    name: string
}

export interface Movie {
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    original_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: string
    poster_path: string
    vote_average: number
    vote_count: number
}

export interface Element {
    type: ElementTypes
}

export enum ElementTypes {
    Bloopers,
    Features,
    BehindTheScenes,
    Clip,
    Trailer,
    Teaser
}