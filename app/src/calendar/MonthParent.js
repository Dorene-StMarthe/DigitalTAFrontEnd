import React from "react";
import Month from './Month.js'
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';


class MonthParent extends React.Component {

    constructor(props) { 
        super(props)
        this.state = {
            startDay: '',
            length: '',
            janStartDay: '',
            leapYear: '',
    }}
    
    //Call back function for the month dropdown
    callbackFooMonth = (value) => {
        let newValue = [value[0], value[2] + value[3]]
        console.log('v' , newValue)
        //Make the start day and length the value of the selected month
        this.setState({
          startDay: newValue[0],
          length: newValue[1]
        })
    }

    //Call back function for the year dropdown
    callbackFooYear = (value) => {

        //Make the start day for the month 
        this.setState({
          startDay: value[0],
          janStartDay: value[0],
          leapYear: value[2]
        })
     
    }

    

    render() {
        console.log(this.state.janStartDay)
        return (
            <div>
            <Month startDay={this.state.startDay} length={this.state.length}/>
            <MonthDropdown startDay={this.state.janStartDay} leapYear={this.state.leapYear} callbackFoo={(value) => this.callbackFooMonth(value)}/>
            <YearDropdown callbackFoo={(value) => this.callbackFooYear(value)}/>
            </div>
        );
    }      

}

export default MonthParent