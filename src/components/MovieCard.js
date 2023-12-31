import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_URL + posterPath} alt="" />
    </div>
  )
}

export default MovieCard
