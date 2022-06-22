import React from 'react';
import Screen from "../components/Screen"
import PropTypes from 'prop-types'

const Cinema = props => {
    let seats = Array.from(Array(64).keys());
    let occupiedSeats = props.selectedMovie.occupied;

    const reserveSeatSelection = (seat) => {
        if (props.selectedSeats.includes(seat)) {
            props.onSeatSelection(props.selectedSeats.filter(selectedSeat => (selectedSeat !== seat)))
            //console.log("seat already selected then deselect the seat")
        } else {
            props.onSeatSelection([...props.selectedSeats, seat])
                //console.log("new seat")
            }

    }
    return (
        <div id="cinema-container">
            <Screen />
            <div id="cinema">
                {seats.map((seat, index, arr) => {
                    const occupied = occupiedSeats.includes(seat);
                    const selected = props.selectedSeats.includes(seat);
                    //console.log(occupied)
                    return (<span
                        tabindex="0"
                        onClick={occupied ? null : () => reserveSeatSelection(seat)}
                        onKeyPress={
                            occupied
                                ? null
                                : (e) => {
                                    if (e.key === "Enter") {
                                        reserveSeatSelection(seat);
                                    }
                                }
                        }
                        className={`seat ${selected ? "selected-seat" : ""} ${occupied ? "occupied" : ""} `}
                        key={seat}
                    ></span>)

                })}

            </div>
            <div className='booking-info'>
                <span>Congratulations,</span>You have selected {props.selectedSeats.length} seats.
                Price: {props.selectedMovie.price * props.selectedSeats.length}
                {console.log(props.selectedSeats)}

            </div>
        </div>
    )
}

Cinema.propTypes = {
    selectedMovie: PropTypes.object,
    selectedSeats: PropTypes.array,
    onSeatSelection: PropTypes.func,
}

Cinema.defaultProps = {
    selectedMovie: {},
    selectedSeats: [],
    onSeatSelection: () => {},
}

export default Cinema