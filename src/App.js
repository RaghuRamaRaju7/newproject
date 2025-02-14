import react from 'react';
import { useState, useEffect } from 'react';
import './App.css'

const baseurl = "http://www.omdbapi.com/?apikey=8203c1b";

const App = () => {
  const [ movies, setmovies ] = useState ([  ]);
  const [ page, setpage ] = useState(1);
  const fetchmovies = async() => {
    const response=await fetch(`${baseurl} &s=movie&page=${page}`);
      const data=await response.json();
      console.log(data.Search);
      if(data.Search){
        setmovies((previousmovies) => [...previousmovies,...data.Search])
      }
  }

const loadmovies = () => {
setpage((previouspage) => previouspage + 1);
}

  useEffect(
    ()=>{
      fetchmovies()
    },[page])
  return (
    <>
      <div className='container'>
        <div className='row'>
          {
            movies.map((movie)=>(
              <div className='col'>
            <div className='card'>
              <img src={movie.Poster} alt={movie.Title} />
              <div className='card-body'>
                <h1>Title:{movie.Title}</h1>
                <h5>Year:{movie.Year}</h5>
              </div>
            </div>
          </div>
            ))
          }
        </div>
        <button className='btn btn-primary' onClick={loadmovies}>Load More</button>
      </div>
    </>
  );
}



export default App;