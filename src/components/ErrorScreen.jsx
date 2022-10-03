import React from 'react'

const ErrorScreen = () => {

    const reload = () => {
        window.location.reload(true);
    }


    return (
        <article className='error'>



            <header className='error__banner'>

                <h2 className='error__title'>this location is not found</h2>

                <img className='error__layer1' src="img/capa1.png" alt="Imagen de portal verde" />
                <img className='error__layer2' src="img/capa2.svg" alt="Imagen de portal verde" />
                <img className='error__layer3' src="img/capa3.svg" alt="Imagen de portal verde" />
                <img className='error__layer4' src="img/capa4.svg" alt="Imagen de portal verde" />
                <img className='error__layer5' src="img/capa5.png" alt="Imagen de portal verde" />
                <img className='error__layer6' src="img/capa5.png" alt="Imagen de portal verde" />
                <img className='error__rickymorty' src="img/rick y morty.png" alt="Imagen de Rick y Morty" />
                <img className='error__logo' src="img/logo2.gif" alt="" />

                <p className='error__number'>4</p>
                <p className='error__number2'>4</p>

                <button onClick={reload} className='error__btn'><img src="img/btn exit.gif" alt="" /></button>

            </header>



        </article>
    )
}

export default ErrorScreen