import './App.css';
import React, { useState } from 'react'
import clsx from 'clsx'


// @todo move this in a constant file
const movies = [
  {
    name: '365 Days this day',
    description: 'Laura and Massimo attempt to piece their lives back together following the inter-mafia conflict. However, Massimo\'s family ties and a mysterious man bidding for Laura\'s heart complicate the lovers\' lives.',
    releaseDate: '2022',
    director: 'Barbara Białowąs',
    language: 'English',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
    image: '365-days.jpeg',
    imageLandscape: '365-days-large.webp',
    type: 'Action, Drama',
    rating: 4,
  },
  {
    name: 'The Takedown',
    description: 'Ousmane and François are two cops with very different styles. The unlikely pair are reunited once again for a new investigation. What seemed to be a simple drug deal turns out to be a high-scale criminal case wrapped in danger.',
    director: 'Louis Leterrier',
    language: 'French',
    releaseDate: '6 May 2022',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
    image: 'takedown.jpeg',
    type: 'Comedy, Family',
    rating: 5,
  },
  {
    name: 'A Perfect Pairing',
    description: 'To win over a major client, a go-getter LA wine executive signs on to work at an Australian sheep farm, where she sparks with a rugged and mysterious local.',
    director: 'Stuart McDonald',
    releaseDate: '19 May 2022',
    language: 'English',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
    image: 'A-perfect-pairing.jpeg',
    type: 'Family, Drama',
    rating: 6.1,
  },
  {
    name: 'De-Laurte',
    description: 'A married couple on the brink of disillusion allows a stranger to live with them in their idyllic cottage. Will this stranger push their fragile state over.',
    director: 'Tom Hughes',
    releaseDate: '23 May 2021',
    language: 'English',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
    image: 'de-lautre.webp',
    type: 'Comedy, Drama',
    rating: 5,
  },
  {
    name: 'Captain India',
    description: 'Captain India is an unreleased computer-animated film. In this film Yuvraj Singh has given his voice, and the fantasy story is loosely based on the life of this cricketer.',
    director: 'Manny Bains',
    releaseDate: '2010',
    language: 'English',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
    image: 'captain-india.jpeg',
    type: 'Action, Drama',
    rating: 8,
  },
  {
    name: 'Metal Lords',
    description: 'For teenage misfits Hunter and Kevin, the path to glory is clear: devote themselves to metal, win Battle of the Bands, and be worshipped like gods.',
    director: 'Peter Sollett',
    releaseDate: '8 April 2022',
    language: 'English',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
    image: 'metal-lords.jpeg',
    type: 'Drama, Thriller',
    rating: 6.7,
  },
  {
    name: 'RRR',
    description: 'A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.',
    director: 'Stuart McDonald',
    releaseDate: '19 May 2022',
    language: 'English',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
    image: 'rrr.webp',
    type: 'Comedy, Drama',
    rating: 1,
  },
  {
    name: 'Yodha',
    description: 'Bunny falls in love with Mahalaxmi, whose father Somaraju is a rich businessman. When Somaraju agrees to let them marry, Bunny puts forth the condition that he wants Somaraju\'s entire wealth as dowry.',
    director: 'Sangeeth Sivan',
    releaseDate: '3 September 1992',
    language: 'Malayalam',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
    image: 'yodha.jpeg',
    type: 'Thriller, Drama',
    rating: 8.2,
  },
  {
    name: 'The Presence of Love',
    description: 'An adjunct professor bonds with a single father after traveling to England to visit the farm where her late mother grew up.',
    director: 'Maclain Nelson',
    releaseDate: '19 May 2022',
    language: 'English',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
    image: 'presence.jpg',
    type: 'Thriller, Drama',
    rating: 7.2,
  },
]
// @todo move this in a constant file
const seats = Array.from({ length: 8 * 8 }, (_, i) => i)


function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])

  return (
    <div className="App my-3">
      <header className=" flex justify-center mb-4 border-b border-slate-800">
        <img src="images/logo.svg" alt="Book my show logo" className="center w-36 pb-3" />
      </header>
      <main>

        <div className='flex mx-10 border-b border-slate-800 pb-4 mb-3'>
          <div className='grid grid-cols-3 w-3/4'>
            <img src={`images/${selectedMovie.image}`} alt={selectedMovie.name} className="my-4" />
            <div className='p-4 col-span-2'>
              <h1 className='text-6xl mb-4'>{selectedMovie.name}</h1>
              <div className='text-lg mb-4 pr-10'>{selectedMovie.description}</div>
              <div className='text-lg mb-1'>{selectedMovie.type}</div>
              <div className='text-lg mb-1'>IMDB Rating: {selectedMovie.rating}</div>
              <div className='text-lg mb-1'>Director: {selectedMovie.director}</div>
              <div className='text-lg mb-1'>Release Date: {selectedMovie.releaseDate}</div>
              <div className='text-lg mb-1'>Language: {selectedMovie.language}</div>
              <div className='text-lg mb-4'>Price: ${selectedMovie.price}</div>
              <button className='text-xl red bg-red-800 px-4 py-2 text-center'>Watch Trailer</button>

            </div>
          </div>
          <div className='mt-10'>
            <div className='text-xl red bg-gray-800 font-bold px-4 pt-3 pb-2 rounded text-center'>Reserve Seat &#8595;</div>

            <ShowCase />
            <Cinema
              movie={selectedMovie}
              selectedSeats={selectedSeats}
              onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
            />

            
            {selectedSeats.length > 0 && (
              <p className="info text-lg">
                Congratulations, <span className="count">{selectedSeats.length}</span>{' '}
                seats are reserved for the price of {' '}
                <span className="total">
                  ${selectedSeats.length * selectedMovie.price}
                </span>
              </p>
            )}
            
          
          </div>
        </div>

        
        <Movies
          movie={selectedMovie}
          onChange={movie => {
            setSelectedSeats([])
            setSelectedMovie(movie)
          }}
        />
      </main>
    </div>
  );
}

export default App;


// @todo Make separate component
function Movies({ movie, onChange }) {
  const changeMovie = (movie) => {
    onChange(movie)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="Movies mx-10">
      <h2 className='bold text-xl my-4'>Latest movies</h2>
      <ul
        id="movie"
        className='grid-cols-5 grid gap-x-4 gap-y-10'
      >
        {movies.map((movie, index) => (
          <li onClick={() => changeMovie(movie)} key={movie.name} className="hover:scale-105 hover:translate-x-2 hover:-translate-y-2 cursor-pointer bg-black rounded hover:shadow-3xl">
            <img src={`images/${movie.image}`} alt="365" height="200" className="rounded" />
            <div className='text-base font-bold my-2'>{movie.name}</div>
            <div className='text-sm mb-3'>{movie.type}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// @todo Make separate component
function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )
}
