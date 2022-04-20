import React from 'react'
import { Movie } from '../types'

interface RowProps {
    title: string
    movies: Movie[]
}

function Row({ title, movies }: RowProps) {
    return (
        <div>Row</div>
    )
}

export default Row