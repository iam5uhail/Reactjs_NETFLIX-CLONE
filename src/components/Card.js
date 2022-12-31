import React from 'react'
// import img from "../images/movie.webp"

const Card = ({img}) => {
  return (
    <div className='card'>
        <img src={img} alt="cover"/>
    </div>
  )
}

export default Card