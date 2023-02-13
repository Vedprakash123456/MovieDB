import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apikey } from "../api";

export default function SearchMovie() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const searchValue = (searchItem) => {
    setSearchInput(searchItem);
  };

  var myfunc = async (event) => {
    event.preventDefault();
    const search = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&page=1&query=${searchInput}`;
    // console.log(search);
    try {
      const res = await fetch(search);
      const json = await res.json();
      navigate("/movie-search", {
        state: {
          jsonData: json,
          paramData: `${searchInput}`,
        },
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <form className="d-flex" role="search" method="post">
      <input
        type="search"
        className="form-control"
        placeholder="Movie Name"
        aria-label="Search"
        onChange={(ev) => searchValue(ev.target.value)}
      />

      <button className="btn btn-sm btn-dark" type="button" onClick={myfunc}>
        Search
      </button>
    </form>
  );
}
