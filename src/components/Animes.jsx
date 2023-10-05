import React from 'react'
import { Link } from 'react-router-dom'

const Animes = ({ showAnime }) => {   

    return (
        <Link to={`/anime/${showAnime.mal_id}`} 
        className='bg-red-600 cursor-pointer
        rounded-xl overflow-hidden 
        hover:bg-black hover:text-white
        transition-colors duration-500
        '>
            <button             
            className='h-[300px] '>
                <img className='h-[80%] w-[90%] m-auto object-contain pt-1
                hover:scale-105 ' src={showAnime.images.webp.image_url} alt="" />
                <h1 className='line-clamp-2 text-center px-4 py-1 
                '>{showAnime.title}</h1>
            </button>


        </Link>
    )
}

export default Animes