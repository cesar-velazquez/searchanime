import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnimeList from './AnimeList'
import InicioLista from './InicioLista'

const Buscador = () => {
    const [showAnimes, setShowAnimes] = useState([])
    const [popularsAnimes, setPopularsAnimes] = useState([])

    const handleSearch = (e) => {
        e.preventDefault()
        const nameanime = e.target.animename.value
        const url=`https://api.jikan.moe/v4/anime?q=${nameanime}`;
        axios        
            .get(url)
            .then(({ data }) => setShowAnimes(data.data))
            .catch((err) => console.log(err))
        }
        useEffect(() => {
            const url = 'https://api.jikan.moe/v4/top/anime'
            axios
                .get(url)
                .then(({data}) => setPopularsAnimes(data.data))
                // .then(({data}) => console.log(data.data))
                .catch((err) => console.log(err))            
        }, [])
        

    return (
        <main className='text-white'>
            <h1 className='text-white text-center p-4
            font-semibold text-2xl' >Buscador de animes</h1>

            <form action=""
                onSubmit={handleSearch}
                className='max-w-max grid justify-center items-center m-auto
            p-4 my-4  '>
                <input type="text" name='animename'
                    className='text-black font-semibold text-xl text-center' />
                <button className='bg-red-600 p-1 px-4 m-4
                hover:bg-red-700 transition-colors duration-500
                '>Buscar</button>
            </form>
            <AnimeList showAnimes={showAnimes} />
            <section className='bg-blue-950/90 
            p-4 grid gap-4
            grid-cols-[repeat(auto-fit,_minmax(250px,_2fr))]
            max-w-[1200px] mx-auto  '>
            {
                popularsAnimes.map((popularAnime) => (
                    <InicioLista 
                    popularAnime={popularAnime} key={popularAnime.mal_id}/>
                ))
            }
            </section>
        </main>
    )
}

export default Buscador