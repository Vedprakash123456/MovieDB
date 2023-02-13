import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCrud } from "../customHook/useCrud";
import { api, apikey, imgpath } from "../api";

export default function Singlemovie() {
  const [castDetl, setCast] = useState([]);
  var { id } = useParams();

  var api_ans = useCrud(`movie/${id}?api_key=${apikey}&language=en-US`);
  console.log(api_ans);

  

  useEffect(() => {
    const ans_cast = `${api}movie/${id}/credits?api_key=${apikey}&language=en-US`;
    // console.log(ans_cast);

    const fetchData = async () => {
      try {
        const response = await fetch(ans_cast);
        const json = await response.json();
        console.log(json);
        setCast(json.cast);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center text-uppercase">Single movie details page</h2>

      {api_ans && (
        <div className="row movie-details">
          <div className="col-xl-6 ">
            <div className="row">
              <div className="col-xl-3 col-4">
                <img
                  src={imgpath + api_ans.poster_path}
                  className="img-fluid"
                />
              </div>
              <div className="col-xl-9 col-8">
                <h3 style={{ color: "white" }}>
                  {api_ans.title} : {api_ans.tagline}
                </h3>
                <h5 style={{ color: "blue" }}>
                  Rating : {api_ans.vote_average}
                </h5>
                <p style={{ color: "white" }}>
                  Released Date : {api_ans.release_date}
                </p>
              </div>
              <h4 style={{ color: "white" }}>Overview</h4>
              <p>{api_ans.overview}</p>
            </div>
          </div>
          <div className="col-xl-6">
            <img src={imgpath + api_ans.backdrop_path} className="img-fluid" />
          </div>
        </div>
      )}

      <div className="row cast-details">
        <h4 className="text-uppercase" style={{ color: "white" }}>
          Cast
        </h4>
        {castDetl.map((castdata, i) => {
          return (
            <div key={i} className="col-xl-2 col-6 cast-data">
              <img
                src={imgpath + castdata.profile_path}
                className="img-fluid"
              />
              <h6 style={{ color: "white" }}>{castdata.name}</h6>
              <p style={{ color: "white" }}>Character : {castdata.character}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
