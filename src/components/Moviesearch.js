import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { imgpath } from "../api";
import { searchApi } from "../api";

export default function Moviesearch() {
  const location_path = useLocation();

  const [searchData, setSearchData] = useState([]);
  var [pageno, setPageNo] = useState(1);
  const [paramData, setParamData] = useState("");

  useEffect(() => {
    setSearchData(location_path.state.jsonData);
    setParamData(location_path.state.paramData);
    
  }, [location_path.state.jsonData, location_path.state.paramData]);

  let totalItem = 0;
  if (searchData.results != null) {
    totalItem = searchData.results.length;
  } else {
    totalItem = 0;
  }

  const totalPages = searchData.total_pages;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  async function handlerPaginate(ev) {
    ev.preventDefault();
    const pageno = ev.target.attributes.for.value;
    setPageNo(pageno);

    const serachUrl = searchApi + `page=${pageno}&query=${paramData}`;
    try {
      const resp = await fetch(serachUrl);
      const ans = await resp.json();
      setSearchData(ans);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <h2>Searched Movie Page</h2>
      {totalItem > 0 ? (
        <nav className="example" aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            {pages &&
              pages.length > 0 &&
              pages.map((val, i) => (
                <li className="page-item" key={i}>
                  <a
                    className="page-link"
                    htmlFor={val}
                    href="#"
                    onClick={handlerPaginate}>
                    {val}
                  </a>
                </li>
              ))}
            <li className="page-item">
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      ) : (
        <p>No Data Found</p>
      )}

      <div className="row">
        <h4>Total Search Item: {totalItem}</h4>
        {searchData.results &&
          searchData.results.map((item, index) => {
            return (
              <>
                <div className="col-xl-3 show-mov" key={index}>
                  <Link to={"/single-movie/" + item.id}>
                    {
                      <img
                        src={imgpath + item.poster_path}
                        className="img-fluid movie-img"
                        alt={item.original_title}
                      />
                    }
                  </Link>
                  <h4 className="movie-title">
                    <Link
                      to={"/single-movie/" + item.id}
                      title={item.original_title}>
                      {item.original_title}
                    </Link>
                  </h4>

                  <p>Rating: {item.vote_average}/10</p>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
