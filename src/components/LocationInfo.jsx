import React from 'react'

const LocationInfo = ({location}) => {
   
 
    return (
    <article className='card__location'>
        <h2 className='location__title'>{location?.name}</h2>
        <ul className='location__list'>
            <li className='location__items'><span className='location__span'>Type:</span>{location?.type}</li>
            <li className='location__items'><span className='location__span'>Dimension:</span>{location?.dimension}</li>
            <li className='location__items'><span className='location__span'>Population:</span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo