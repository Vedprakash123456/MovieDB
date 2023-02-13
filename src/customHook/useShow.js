import { imgpath } from "../api";
import { Link } from "react-router-dom";

export function useShow(show_data) {
    
    return(
    show_data && show_data.length>0 && show_data.map( val => 
        

        <div className="col-xl-3 col-6 show-mov">
            <Link to={"/single-movie/"+val.id}>
            <img src={imgpath+ val.poster_path} alt="no_img found" className="img-fluid"/>
            </Link>
            <h4><Link to={"/single-movie/"+val.id}>{val.original_title}</Link></h4>
            <p>Rating :{val.vote_average}</p>
        </div>    
    )
    )
}

