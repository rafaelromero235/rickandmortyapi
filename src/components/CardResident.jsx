import axios from 'axios'
import React, { useEffect, useState } from 'react'



const CardResident = ({ url }) => {
    const [resident, setresident] = useState()


    useEffect(() => {
        axios.get(url)
            .then(res => setresident(res.data))
            .catch(err => console.log(err))


    }, [])

    

    return (
        <article className='card'>
            <header className='card__header'>
                <img className='card__img' src={resident?.image} alt="" />
                <div className='card__container-status'>
                    <div className={`card__circle-status ${resident?.status}`}>
                     </div> 
                    <span className='card__status'>{resident?.status}</span>
                </div>
            </header>
            <section className='card__body'>
            <h3 className='card__name'>{resident?.name}</h3>
            <ul className='card__list'>
                <li className='card__item'><span className='card__span'>especie</span>{resident?.species}</li>
                <li className='card__item'><span className='card__span'>origen</span>{resident?.origin.name}</li>
                <li className='card__item'><span className='card__span'>episodes</span>{resident?.episode.length}</li>
            </ul>
            </section>
        </article>
    )
}

export default CardResident