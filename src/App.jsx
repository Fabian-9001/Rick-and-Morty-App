import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorScreen from './components/ErrorScreen'
import LocationInfo from './components/LocationInfo'
import getRamdomNumber from './utils/getRamdomNumber'


function App() {

  //GUARDAR LOCALIZACION
  const [location, setLocation] = useState()
  //GUARDAR INFORMACION DEL INPUT Y HACER PETICION CUANDO SE HACE SUBMIT
  const [searchInput, setSearchInput] = useState()
  //GUARDAR LAS SUGERENCIAS DE LA API
  const [suggestedlist, setSuggestedlist] = useState()
  // INDICA EL ERROR
  const [hasError, setHasError] = useState(false)

  /*--NUMERO RAMDOM--*/
  getRamdomNumber



  useEffect(() => {
    let id = getRamdomNumber()

    if (searchInput) { id = searchInput }

    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true))
  }, [searchInput])



  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }



  const handleChange = e => {

    if (e.target.value === '') {
      setSuggestedlist()
    }
    else {
      const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

      axios.get(URL)
        .then(res => setSuggestedlist(res.data.results))
        .catch(err => console.log(err))
    }

  }



  return (
    <div className="App">

      {/*}--MODAL DE ERROR {*/}
      {
        hasError ?
          <ErrorScreen />
          :
          <>
            {/*}--INFROMACION DE LOCALIZACION--{*/}
            <LocationInfo location={location}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              suggestedlist={suggestedlist}
              setSearchInput={setSearchInput} />

            {/*}--INFORMACION DE PERSONAJES--{*/}
            <div className='container__card'>
              {
                location?.residents.map(url => (
                  <CardResident
                    url={url}
                    key={url}
                  />
                ))
              }
            </div>
          </>
      }

      {/*}BOTON DE REDIRECCIONAMIENTO AL FORMULARIO {*/}
      <a href="#idLocation"> <img className='btn__rick' src="img/btnRick.gif" alt="Imagen gif de cabeza de Rick Sanchez" /></a>

    </div>
  )
}

export default App
