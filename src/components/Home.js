import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai"
import { BiPlay } from "react-icons/bi"
import Row from './Row'
import axios from 'axios'
import img from "../images/movie.webp"

const apiKey = "f5c08ad1d2c9c219b9e654d5208f216a"
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const popular = "popular"
const toprated = "top_rated"


const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowplayingMovies, setNowplayingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topratedMovies, setTopratedMovies] = useState([])
  const [genreMovies, setGenreMovies] = useState([])

  useEffect(() => {

    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
      setUpcomingMovies(results)
    }
    const fetchnowplaying = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      setNowplayingMovies(results)
    }
    const fetchpopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      setPopularMovies(results)
    }
    const fetchtoprated = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${toprated}?api_key=${apiKey}`)
      setTopratedMovies(results)
    }
    const fetchAllGenre = async () => {
      const { data: { genres } } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
      setGenreMovies(genres)
    }
    fetchUpcoming()
    fetchnowplaying()
    fetchpopular()
    fetchtoprated()
    fetchAllGenre()

  }, [])

  return (
    <section className='home'>
      <section className='banner'>
        <div>
        <h1>Avengers</h1>
        <p>Lorem molestias distinctio repellat tempora impedit, suscipit veniam fugit, dignissimos asperiores accusantium nesciunt dicta ea.</p>
        <button><BiPlay /> Play </button>
        <button>My List <AiOutlinePlus /></button>
        </div>
      </section>
      <Row title="Upcoming" arr={upcomingMovies} />
      <Row title="Now playing" arr={nowplayingMovies} />
      <Row title="Popular" arr={popularMovies} />
      <Row title="Top rated" arr={topratedMovies} />
      <div className='genreBox'>

        {genreMovies.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}


      </div>
    </section>
  )
}

export default Home