import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div>
      {movies.map((el,key) => {
        return <MovieCard el={el} key={key} />



      } )}
    </div>
  )
}

export default MovieList
