import React from 'react'
import PropTypes from 'prop-types'


const SelectedMovie = props => {
  return (
    <div id="selected-movie">
      <div className="image-container"><img src={`images/${props.selectedMovie.image}`} alt="img" /></div>
      <div className='detail'>
        <p className='movie-name'>{props.selectedMovie.name}</p>
        <p>{props.selectedMovie.description}</p>
        <p>Director: {props.selectedMovie.director}</p>
        <p>Release-Date: {props.selectedMovie.releaseDate}</p>
        <p>Language: {props.selectedMovie.language}</p>
        <p>Price: {props.selectedMovie.price}</p>
        <p>Type: {props.selectedMovie.type}</p>
        <button className="watch">Watch Trailer</button>
      </div>

    </div>
  )
}

SelectedMovie.propTypes = {
  selectedMovie: PropTypes.object,
}
SelectedMovie.defaultProps = {
  selectedMovie: {},
}
export default SelectedMovie