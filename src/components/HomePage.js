import React from "react";
import { useCrud } from "../customHook/useCrud";
import { apikey } from "../api";
import { useShow } from "../customHook/useShow";
import { Link, useParams } from "react-router-dom";

function Home() {
  const { id } = useParams();
  console.log(id);

  var api_path = useCrud(
    `movie/popular?api_key=${apikey}&language=en-US&page=${id}`
  );

  var show_img = useShow(api_path["results"]);
  console.log(show_img);

  // Pagination 
  var pages = api_path["total_pages"];
  if (pages > 0) {
    var msg = [];
    for (var i = 1; i <= 10; i++) {
      msg.push(
        <li class="page-item">
          <Link class="page-link" to={"/home/" + i}>
            {i}
          </Link>
        </li>
      );
    }
    console.log(msg);
  }

  return (
    <div className="container">
      <h2 className="text-center text-uppercase">Home Page / Popular Movies</h2>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>

          {msg && msg.length > 0 && msg.map((val) => <>{val}</>)}

          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>

      <h4> Page No : {id} </h4>

      <div className="container">
        <div className="row">{show_img}</div>
      </div>
    </div>
  );
}

export default Home;
