import Image from 'next/image'
import React from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../types'

interface BannerProps {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: BannerProps) {
    const [movie, setMovie] = React.useState<Movie | null>(null)

    React.useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])

    return (
        <div>
            <div className="absolute top-0 left-0 h-[95vh] w-screen">
                <Image
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Banner