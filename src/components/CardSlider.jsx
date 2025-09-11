import React from 'react'
import { Card } from './Card'

const CardSlider = ({data, title}) => {
  return (
    <div>
        {
            data.map((movie,idx)=>{
                return <Card movieData={movie} index={idx} key={movie.id} />
            })
        }
    </div>
  )
}

export default CardSlider