import "./Search.css"

function Search({ weatherMethod }) {
  return (
    <form className="search" onSubmit={weatherMethod}>
      <input
        type="text"
        name="city"
        placeholder="Введите название города"
        className="search__input"
      />
      <button className="search__button">Поиск</button>
    </form>
  )
}

export default Search
