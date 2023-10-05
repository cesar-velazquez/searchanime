import React from 'react'
import Animes from './Animes'

const AnimeList = ({showAnimes}) => {
    return (
        <main className='px-4 py-10 text-black font-bold
        text-center line-clamp-1
        grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]
        gap-5
        max-w-[1200px] mx-auto 
        '>
            {/* key={showAnime.url} */}
            {
                showAnimes.map((showAnime) => (     
                    <Animes showAnime={showAnime} key={showAnime.url}  />               
                ))
            }
        </main>
    )
}

export default AnimeList