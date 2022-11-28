import React, { useState, useEffect } from 'react'
import './Banner.css'

import axios from '../../Axios'
import { API_Key, imageUrl } from '../../Constants/Constants'

function Banner() {

    const [movie, setMovie] = useState()
    useEffect(() => {

        axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response) => {

            
            setMovie(response.data.results.sort((a, b) => {
                { return 0.5 - Math.random() }
            })[0]);
        })
    }, [])

    return (

        <div className='banner'
            style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>

            <div className="content">

                <h1 className='movie_title'>{movie ? movie.original_title : "err"}</h1>

                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>

                <p className='movie_discription'>{movie ? movie.overview : ''}</p>

            </div>

            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner