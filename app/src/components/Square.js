import React from 'react';
import '../index.css';

//Make the square component
class Square extends React.Component {

    //render the square
    render() {

        return (
            <div id="squareDiv">

                {/* gets the day variable sent from the month component  */}
                {this.props.day}
            </div>
        );
    }
}

//Export the square
export default Square