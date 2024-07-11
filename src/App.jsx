/* eslint-disable no-undef */
import { useEffect, useState } from "react"
import "./App.css"
import Header from "./Header"
import Main from "./Main"
import Search from "./Search"

const API_KEY = "0cdbc003f6410956a00f0814afe5fc18"

function App() {
  const [state, setState] = useState({
    temp: '',
    city: '',
    precipitation: '',
    image: '',
    error: '',
  })

  // let [date, setDate] = useEffect(() => {
  //   const date = new Date()
  //   const month = (date.getMonth()+1).toString()
  //   const day = date.getDate().toString()

  //   return `${date.getFullYear()}-${month.length === 2 ? month : `0${month}`}-${day.length === 2 ? day : `0${day}`}`
  // })

  const gettingWeather = async (event) => {
    event.preventDefault()
    var city = event.target.elements.city.value
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`
    )
    const data = await api_url.json()
    const date = new Date()
    console.log(date);
    console.log(data)

    setState({
      temp: data.main.temp,
      city: data.name,
      precipitation: data.weather[0].description,
      image: data.weather[0].icon
    })
    console.log(temp);

  }

  return (
    <>
      <div className="page">
        <Header />
        <Search weatherMethod={gettingWeather} />
        <Main data={state} />
      </div>
    </>
  )
}

export default App
