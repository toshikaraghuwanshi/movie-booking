import React from 'react'
import PropTypes from 'prop-types'

const Movies = props => {
    return (
        <>
        <div className='heading'>Latest Movies</div>
            <ul className='movies-list'>
                {props.movies.map(function (item, i, arr) {
                    //console.log(arr);
                    return <li
                        tabindex="0"
                        onClick={() => props.onMovieSelection(item)}
                        onKeyPress={
                            (e) => {
                                    if (e.key === "Enter") {
                                        props.onMovieSelection(item);
                                    }
                                }
                        }
                        key={i}
                    >
                        <img src={`images/${item.image}`} alt="img" width="100%" />
                        <p>{item.name}</p>
                        <p>{item.type}</p>
                    </li>

                })
                }

            </ul>
            </> 
    )
}

Movies.propTypes = {
    movies: PropTypes.arrayOf,
    onMovieSelection: PropTypes.func,
}
Movies.defaultProps = {
    movies: [],
    onMovieSelection: () => {},
}

export default Movies