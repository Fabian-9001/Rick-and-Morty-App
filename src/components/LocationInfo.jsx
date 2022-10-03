import React from 'react'
import FilterList from './FilterList'

const LocationInfo = ({ location, handleSubmit, handleChange, suggestedlist, setSearchInput }) => {



    return (
        <header className='header'>

            <header className='header__banner'>
                <img className='layer1' src="img/capa1.png" alt="Imagen de portal verde" />
                <img className='layer2' src="img/capa2.svg" alt="Imagen de portal verde" />
                <img className='layer3' src="img/capa3.svg" alt="Imagen de portal verde" />
                <img className='layer4' src="img/capa4.svg" alt="Imagen de portal verde" />
                <img className='layer5' src="img/capa5.png" alt="Imagen de portal verde" />
                <img className='layer6' src="img/capa5.png" alt="Imagen de portal verde" />
                <img className='rickymorty' src="img/rick y morty.png" alt="Imagen de Rick y Morty" />
                <img className='logo' src="img/logo2.gif" alt="" />
            </header>


            <div className='header__information'>

                <h2 className='header__location'>{location?.name}</h2>

                <ul className='header__list'>
                    <li className='header__type'> <span className='header__span'>Type: </span>{location?.type} </li>
                    <li className='header__dimension'> <span className='header__span'>Location: </span>{location?.dimension} </li>
                    <li className='header__population'> <span className='header__span'>Population: </span>{location?.residents.length} </li>
                </ul>

                <form className='form' onSubmit={handleSubmit} action="">

                    <div className='form__btns'>
                        <input id='idLocation' className='idLocation' type="text" placeholder='Enter number from 1 to 126' onChange={handleChange} />
                        <button className='btn__search'>Search</button>
                    </div>

                    <div className='form__list'>
                        <FilterList
                            suggestedlist={suggestedlist}
                            setSearchInput={setSearchInput} />
                    </div>

                </form>

            </div>

        </header>
    )
}

export default LocationInfo