import React from "react";
import { useCrud } from "../customHook/useCrud";
import { apikey } from "../api";
import { useShow } from "../customHook/useShow";
import { Link, useParams } from "react-router-dom";

export default function Toprated() {
  const { id } = useParams();
  console.log(id);

  var api_path = useCrud(
    `movie/top_rated?api_key=${apikey}&language=en-US&page=${id}`
  );
  console.log(api_path['results']);


  var show_img = useShow(api_path["results"]);
  console.log(show_img)

  //Pagination
  var pages = api_path["total_pages"];
  if (pages > 0) {
    var msg = [];
    for (var i = 1; i <= 10; i++) {
      msg.push(
        <li className="page-items">
          <Link class="page-link" to={"/top-rated-page/" + i}>
            {i}
          </Link>
        </li>
      );
    }
    console.log(msg);
  }

  return (
    <div className="container">
      <h2 className="text-center text-uppercase">Top-Rated Movie Page</h2>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>

          {msg && msg.length > 0 && msg.map((val) => <>{val}</>)}

          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>

      <h4> Page No : {id}</h4>

      <div className="container">
        <div className="row">{show_img}</div>
      </div>
    </div>
  );
}
