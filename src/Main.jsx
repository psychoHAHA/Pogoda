import "./Main.css"

import image from "../images/01d@2x.png"

function Main({ data }) {

  const date = new Date()

  const dateOptions = Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  const RUdate = new Intl.DateTimeFormat("ru", dateOptions)

  return (
    <>
      <div className="main">
        <div className="main__element">
          <p className="main__text main__name">{data.city}</p>
        </div>
        <div className="main__element">
          {/* <p className="main__text main__date">{RUdate.format(date)}</p> */}
          <p className="main__text main__date">{data.city ? <p>{RUdate.format(date)}</p> : null}</p>
        </div>
        <div className="main__element">
          <p className="main__text main__temperature">{data.temp ? <p>{Math.round(data.temp)} &deg;</p> : null}</p>
        </div>
        <div className="main__element main__element-weather">
          {/* <img className="main__element-image" src={`./../../images/${data.image}.png`} alt="weather" /> */}
          {/* <img className="main__element-image" src={image} alt="weather" /> */}
          <p className="main__text main__precipitation">{data.precipitation}</p>
        </div>
      </div>
    </>
  )
}

export default Main
