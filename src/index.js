import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/style.css';

import Header from './components/Header';
import Home from './components/HomePage';
import Singlemovie from './components/SinglepageMovie';
import Toprated from './components/TopratedPage';
import Upcoming from './components/UpcomingMovie';
import Moviesearch from './components/Moviesearch';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>

    <Route path='' element={<Navigate to="/home/1" replace />} />
      
      <Route path='home' element={<Navigate to="/home/1" replace />} />
      <Route path='home/:id' element={<Home />} />
      
      <Route path='top-rated-page/:id' element={<Toprated />} />
      <Route path='top-rated-page' element={<Navigate to="/top-rated-page/1" replace />} />
      
      <Route path='upcoming-movie' element={<Navigate to="/upcoming-movie/1" replace />} />
      <Route path='upcoming-movie/:id' element={<Upcoming />} />
      <Route path='single-movie/:id' element={<Singlemovie />} />
      <Route path='movie-search' element={<Moviesearch />} />


    </Routes>
  </BrowserRouter>
);

