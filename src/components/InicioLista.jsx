import React from 'react'
import { Link } from 'react-router-dom'

const InicioLista = ({popularAnime}) => {    
    return (
        <Link to={`/anime/${popularAnime.mal_id}`} 
        className='mx-auto grid gap-4
        bg-black hover:bg-white/5 p-4 rounded-xl cursor-pointer '>            
            <div 
            className='h-[350px] w-[200px] 
            grid gap-2'>
                <img 
                className='h-[300px] max-h-[300px] rounded-xl
                mx-auto '
                src={popularAnime.images.webp.image_url} alt="" />
                <h1 className='text-center font-bold line-clamp-2'>{popularAnime.title}</h1>
            </div>

        </Link>
    )
}

export default InicioLista