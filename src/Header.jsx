import "./Header.css"
import logo from "../images/logo.svg"

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="header__title">Pogoda</h1>
        <img className="header__logo" src={logo} alt="logo"/>
      </div>
    </>
  )
}
export default Header
