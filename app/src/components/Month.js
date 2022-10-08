import React, { Component } from 'react';
import Square from './Square'
//Make the month component
class Month extends Component {  

    //render the month
    render() {

        //make the month array
        let monthRow1 = [];
        let monthRow2 = [];
        let monthRow3 = [];
        let monthRow4 = [];
        let monthRow5 = [];
        let monthRow6 = [];
        
        // //loop over the number of days in the month starting at the first day of the month
        for (let i = 1; i <= parseInt(this.props.length) + parseInt(this.props.startDay) - 1; i++) {

            //Only 7 days go into a week
            if (i < parseInt(this.props.startDay)) {
                monthRow1.push("")
            }

            //If it is the first time through the while loop
            if (i < 8 && i >= parseInt(this.props.startDay)) {
                monthRow1.push(<Square day = {i + 1 - parseInt(this.props.startDay)}/>)
            }

            //If it is the second time through the while loop
            if (i < 15 && i > 7) {
                monthRow2.push(<Square day = {i + 1 - parseInt(this.props.startDay)}/>)
            }

            //If it is the third time through the while loop
            if (i > 14 && i < 22) {
                monthRow3.push(<Square day = {i + 1 - parseInt(this.props.startDay)}/>)
            }

            //If it is the fourth time through the while loop
            if (i > 21 && i < 29) {
                monthRow4.push(<Square  day = {i + 1 - parseInt(this.props.startDay)}/>)
            }

            //If it is the fifth time through the while loop
            if (i > 28) {
                monthRow5.push(<Square day = {i + 1 - parseInt(this.props.startDay)}/>)
                if (monthRow5.length > 7) {
                    monthRow6.push(<Square day = {i + 1 - parseInt(this.props.startDay)}/>)
                }
            }
        }

        return (
            <div>

                {/* table that hold calendar */}
                <table>
                    <tbody>
                        {/* 1st row */}
                        <tr>
                            <td>
                                {monthRow1[0]}    
                            </td>    
                            <td>
                                {monthRow1[1]}
                            </td>
                            <td>
                                {monthRow1[2]}
                            </td>
                            <td>
                                {monthRow1[3]}
                            </td>
                            <td>
                                {monthRow1[4]}
                            </td>
                            <td>
                                {monthRow1[5]}
                            </td>
                            <td>
                                {monthRow1[6]}
                            </td>
                        </tr>

                        {/* 2nd row */}
                        <tr>
                            <td>
                                {monthRow2[0]}    
                            </td>    
                            <td>
                                {monthRow2[1]}
                            </td>
                            <td>
                                {monthRow2[2]}
                            </td>
                            <td>
                                {monthRow2[3]}
                            </td>
                            <td>
                                {monthRow2[4]}
                            </td>
                            <td>
                                {monthRow2[5]}
                            </td>
                            <td>
                                {monthRow2[6]}
                            </td>
                        </tr>

                        {/* 3rd row */}
                        <tr>
                            <td>
                                {monthRow3[0]}    
                            </td>    
                            <td>
                                {monthRow3[1]}
                            </td>
                            <td>
                                {monthRow3[2]}
                            </td>
                            <td>
                                {monthRow3[3]}
                            </td>
                            <td>
                                {monthRow3[4]}
                            </td>
                            <td>
                                {monthRow3[5]}
                            </td>
                            <td>
                                {monthRow3[6]}
                            </td>
                        </tr>

                        {/* 4th row */}
                        <tr>
                            <td>
                                {monthRow4[0]}    
                            </td>    
                            <td>
                                {monthRow4[1]}
                            </td>
                            <td>
                                {monthRow4[2]}
                            </td>
                            <td>
                                {monthRow4[3]}
                            </td>
                            <td>
                                {monthRow4[4]}
                            </td>
                            <td>
                                {monthRow4[5]}
                            </td>
                            <td>
                                {monthRow4[6]}
                            </td>
                        </tr>

                        {/* 5th row */}
                        <tr>
                            <td>
                                {monthRow5[0]}    
                            </td>    
                            <td>
                                {monthRow5[1]}
                            </td>
                            <td>
                                {monthRow5[2]}
                            </td>
                            <td>
                                {monthRow5[3]}
                            </td>
                            <td>
                                {monthRow5[4]}
                            </td>
                            <td>
                                {monthRow5[5]}
                            </td>
                            <td>
                                {monthRow5[6]}
                            </td>
                        </tr>


                        {/* 6th row */}
                        <tr>
                            <td>
                                {monthRow6[0]}    
                            </td>    
                            <td>
                                {monthRow6[1]}
                            </td>
                            <td>
                                {monthRow6[2]}
                            </td>
                            <td>
                                {monthRow6[3]}
                            </td>
                            <td>
                                {monthRow6[4]}
                            </td>
                            <td>
                                {monthRow6[5]}
                            </td>
                            <td>
                                {monthRow6[6]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

//Export the month
export default Month