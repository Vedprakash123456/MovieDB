
import { Link } from "react-router-dom";
import SearchMovie from "./SearchMovieInput";

function Header() {
    return (
        <div className="container header">
            <nav class="navbar navbar-expand-lg bg-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">MovieDb</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Popular</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/top-rated-page">Top Rated </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/upcoming-movie">Upcoming</Link>
                            </li>
                        </ul>
                        
                        <SearchMovie/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;