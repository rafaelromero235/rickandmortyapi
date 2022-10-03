import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GetRandomNumber from './Utils/GetRandomNumber'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import ErrorScreen from './components/ErrorScreen'
import './cardResident.css'

function App() {


  const [location, setlocation] = useState()
  const [searchInput, setsearchInput] = useState('')
  const [suggestedList, setsuggestedList] = useState()
  const [haserror, sethaserror] = useState(false)


  console.log(searchInput)

  useEffect(() => {

    let random = GetRandomNumber()
    let url = ''
    if (searchInput) {

      url = `https://rickandmortyapi.com/api/location/${searchInput}`

    } else {

      url = `https://rickandmortyapi.com/api/location/${random}`

    }
    axios.get(url)
      .then(res => {
        setlocation(res.data)
        sethaserror(false)
      })
      .catch(err => sethaserror(true))
  }, [searchInput])

  const handlesubmit = (e) => {
    e.preventDefault()
    setsearchInput(e.target.idlocation.value)

  }

  const handlechangue = (e) => {

    if (e.target.value === "") {

      return setsuggestedList();
    }

    const url = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
    axios.get(url)
      .then(res => setsuggestedList(res.data.results))
      .catch(err => console.log(err))

  }
  console.log(suggestedList)
  return (
    <div className="App">
      <h1>rick and morty</h1>
      <form onSubmit={handlesubmit} action="">
        <input id='idlocation' placeholder='buscar location' type="text" onChange={handlechangue} />
        <button>search</button>
        <FilterList setsearchInput={setsearchInput} suggestedList={suggestedList} />
      </form>

      {
        haserror ?
          <ErrorScreen />
          :
          <>
            <LocationInfo location={location} />
            <div className='card__container'>
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url}

                  />


                ))

              }
            </div>

          </>

      }
    </div>
  )
}

export default App
