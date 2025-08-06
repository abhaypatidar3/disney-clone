import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi' 
import MovieCard from './MovieCard';
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import HrMovieCard from './HrMovieCard';
const MovieList = (props) => {

    const [MovieList, setMovieList] = useState([]);
    const elementRef = useRef();
    const screenwidth = window.innerWidth;
    useEffect(() => {
        getMovieByGenreId();
    }, [])
    
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(props.genreId).then(resp=>{
            // console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }
    
    const sliderRight=(element)=>{
      element.scrollLeft+=screenwidth-110;
    }
    const sliderLeft = (element)=>{
      element.scrollLeft-=screenwidth-110;
    }

  return (
    <div>
      <HiMiniChevronLeft className={`hidden md:block text-white text-[50px] absolute cursor-pointer ${props.index_==2 ? 'mt-[110px]' : 'mt-[145px]'} z-10 mx-0`} onClick={()=>sliderLeft(elementRef.current)} />
      <HiMiniChevronRight className={`hidden md:block text-white text-[50px] absolute cursor-pointer ${props.index_==2 ? 'mt-[110px]' : 'mt-[145px]'} z-10 mx-5 right-0`} onClick={()=>sliderRight(elementRef.current)} />

      <div className='flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pt-5 pb-5 px-4' ref={elementRef}>
        {MovieList.map((item,index)=>(
          <>
            {(props.index_==2) ? <HrMovieCard movie={item}/> : <MovieCard movie={item}/>}
          </>
        ))}
      </div>
    </div>
  )
}

export default MovieList
