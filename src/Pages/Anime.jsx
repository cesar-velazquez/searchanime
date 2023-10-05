import axios from 'axios';

import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Anime = () => {
    const { id } = useParams();
    const [infoAnime, setInfoAnime] = useState(null)

    const url = `https://api.jikan.moe/v4/anime/${id}/full`;
    axios
        .get(url)
        // .then(({ data }) => console.log(data.data))
        .then(({ data }) => setInfoAnime(data.data))
        .catch((err) => console.log(err))
    return (
        <main className='text-white p-4 pt-10
        ' >
            {/* max-w-[900px] m-autobg-blue-950  */}
            <section className='p-6 max-w-[900px] m-auto bg-blue-950/60 '>

            <Link className='' to={-1}>{"<"} Atras </Link>

            {/* <div className='bg-red-600'> */}
            <h1 className='text-center pt-4 font-bold' >{infoAnime?.title}</h1>
            {/* </div> */}
            <section className='p-4 flex gap-2 bg-red-600/50 my-4'>
                <div>
                    <img src={infoAnime?.images.webp.image_url} alt="" />
                </div>
                <div>
                    <p>Puntaje <span>{infoAnime?.score}</span></p>
                    <p>Ranking <span>{infoAnime?.rank}</span></p>
                    <p>Views <span>{infoAnime?.scored_by}</span></p>
                    <p>Fecha de publicación: <span>{infoAnime?.aired.string}</span> </p>
                    {/* <ul>
                        <li>{infoAnime?.genres[0]}</li>
                        <li>{infoAnime?.genres[1]}</li>
                        <li>{infoAnime?.genres[2]}</li>
                        <li>{infoAnime?.genres[3]}</li>
                    </ul> */}
                </div>
            </section>

            <section className='flex flex-col font-bold bg-white/20 text-center px-4 py-1
            rounded-lg  '>
                <a href={infoAnime?.streaming[0]?.url} >Watch Crunchyroll </a>
                <a href={infoAnime?.streaming[1]?.url} >Watch Netflix</a>
            </section>

            <section className='bg-cyan-700/60 my-4 p-2 rounded-xl
            grid gap-4
            '>
                <div>
                    <h3 className='font-bold '>Synopsis</h3>
                    <p>{infoAnime?.synopsis}</p>
                </div>
                <div>
                    <h3 className='font-bold'>BackGround</h3>
                    <p>{infoAnime?.background} </p>
                </div>
            </section>
            <section>

            </section>
                
            </section>            

        </main>
    )
}

export default Anime