import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResident = ({ url }) => {



    /*-- ALMACENA INFORMACION DE PERSONAJES--*/
    const [resident, setResident] = useState()
    /*--ALMACENA COLOR POR STATUS --*/
    const [color, setColor] = useState()



    /*--INFROMACION DE PERSONAJE--*/
    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(err => console.log(err))
    }, [])



    /*--COLOR POR STATUS --*/
    useEffect(() => {
        if (resident?.status === "Dead") { setColor('red') }
        else if (resident?.status === "Alive") { setColor('green') }
        else { setColor('white') }
    }, [resident])



    return (
        <article className='card'>

            <header className='card__header'>

                <img className='card__img' src={resident?.image} alt={`Imagen del personaje ${resident?.name}`} />

                <div className='card__container__status'>
                    <div style={{ backgroundColor: color }} className='card__circle'></div>
                    <span className='card__status'>{resident?.status}</span>
                </div>

            </header>

            <div className='card__information'>
                <h3 className='card__name'>{resident?.name}</h3>
                <ul className='card__list'>
                    <li className='card__specie'> <span className='card__span'>Specie: </span>{resident?.species} </li>
                    <li className='card__origin'> <span className='card__span'>Origin: </span>{resident?.origin.name} </li>
                    <li className='card__episodes'> <span className='card__span'>Episodes: </span>{resident?.episode.length} </li>
                </ul>
            </div>

        </article>
    )
}

export default CardResident