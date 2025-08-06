import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const HrMovieCard = ({movie}) => {
  return (
    <div className='hover:scale-105 transition-all duration-300 ' >
      <div className='w-[200px] md:w-[400px] rounded-lg hover:border-[3px] border-gray-500 shadow-xl shadow-gray-800 cursor-pointer'>
        <img src={IMAGE_BASE_URL+movie.backdrop_path}  className='rounded-md'/>
      </div>
      <h2 className='text-white w-[200px] md:w-[400px] mt-2'>{movie.title}</h2>
    </div>
  )
}

export default HrMovieCard
