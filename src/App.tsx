import { ChangeEvent, useEffect, useState } from 'react'

import { optionType } from './types'
import Search from './components/Search'

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>('')
  const [city, setCity] = useState<optionType | null>(null)
  const [options, setOptions] = useState<[]>([])

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value)

    if (value === '') return

    getSearchOptions(value)
  }

  const getForecast = (city: optionType) => {
    fetch(`
    http://api.openweathermap.org/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&appid=${
      process.env.REACT_APP_API_KEY
    }
    `)
      .then((res) => res.json())
      .then((data) => console.log({ data }))
  }

  const onSubmit = () => {
    if (!city) return

    getForecast(city)
  }

  const onOptionSelect = (option: optionType) => {
    setCity(option)
  }

  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }
  }, [city])

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-emerald-900 via-lime-50 to-lime-900 h-[100vh] w-full">
      <Search term={term} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit}/>
    </main>
  )
}

export default App
