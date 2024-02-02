import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div>
      <div className="search-wrapper p-3">
        <label htmlFor="search"></label>
          <input type="search" id="search" className="" />
      </div>
    </div>
  );
}
