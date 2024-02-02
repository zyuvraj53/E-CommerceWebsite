import "./SearchBar.css";
import React, { useState } from "react";
import search from "../Assets/search.svg";
import "./SearchBar.css";


export default function SearchBar() {
  const [searchbar, setsearchbar] = useState('')
  const quicksearch = (e) => {
    setsearchbar(e.target.value)
    console.log(e.target.value)
  }
  return (
    <>
      <div className="search">
        <input className="search_bar" onChange={quicksearch} placeholder="Quick Search" value={searchbar} type="search" />
        <img className="search_icon" src={search} alt="Search" />
      </div>
    </>
  );
}
