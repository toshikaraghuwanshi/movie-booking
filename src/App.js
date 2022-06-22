import React, { useState } from "react";
import './App.css';
import Movies from "./components/Movies";
import SelectedMovie from "./components/SelectedMovie";
import movies from "./data/movies";
import Cinema from "./components/Cinema";
import Header from "./components/Header";

function App() {

// const [input, setInput] = useState(movies[0].name);
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

//method of movieSelection on li click
  const onMovieSelection = (item) => {
    //state's value updation
    setSelectedSeats([])
    setSelectedMovie(item)
    //console.log(item)
  }
  const onSeatSelection = (seats) => {
    setSelectedSeats(seats)
  }
  return (
    <>
    <Header/>
    <div id="book-movie">
      <SelectedMovie selectedMovie={selectedMovie}/>
      <Cinema selectedMovie={selectedMovie} selectedSeats={selectedSeats} onSeatSelection={onSeatSelection}/>
    </div>
    
     <Movies movies={movies} onMovieSelection={onMovieSelection}/>
     
    </>
  );
}

export default App;
