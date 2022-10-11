import React from "react";

class YearDropdown extends React.Component {


    constructor(props) {
        super(props)
        this.state = {

            //Makes all the years for the dropdown
            y22 : { 
                name: '2022',
                startDay: '7',
                leapYear: 'f'
            },

            y23 : { 
                name: '2023',
                startDay: '1',
                leapYear: 'f'
            },

            y24 : { 
                name: '2024',
                startDay: '3',
                leapYear: 'f'
            },

            y25 : { 
                name: '2025',
                startDay: '4',
                leapYear: 'f'
            },

            y26 : { 
                name: '2026',
                startDay: '5',
                leapYear: 'f'
            },

            y27 : { 
                name: '2027',
                startDay: '6',
                leapYear: 'f'
            },

            y28 : { 
                name: '2028',
                startDay: '1',
                leapYear: 'f'
            },

            y29 : { 
                name: '2029',
                startDay: '2',
                leapYear: 'f'
            },

            y30 : { 
                name: '2030',
                startDay: '3',
                leapYear: 'f'
            },

            value: '?'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {

        //Set the start date of each year to be based on the year before
        this.setState({y23: {
            name: '2023',
            startDay: (parseInt(this.state.y22.startDay) % 7 + 1).toString(),
            leapYear: 'f'
        }
        })

        this.setState({y24: {
        name: '2024',
        startDay: (parseInt(this.state.y23.startDay) % 7 + 1).toString(),
        leapYear: 't'
        }

        })

        this.setState({y25: {
            name: '2025',
            startDay: (parseInt(this.state.y24.startDay) % 7 + 1).toString(),
            leapYear: 'f'
            }
        })

        this.setState({y26: {
            name: '2026',
            startDay: (parseInt(this.state.y25.startDay) % 7 + 1).toString(),
            leapYear: 'f'
            }
        })

        this.setState({y27: {
            name: '2027',
            startDay: (parseInt(this.state.y26.startDay) % 7 + 1).toString(),
            leapYear: 'f'
            }
        })

        this.setState({y28: {
            name: '2028',
            startDay: (parseInt(this.state.y27.startDay) % 7 + 1).toString(),
            leapYear: 't'
            }
        })

        this.setState({y29: {
            name: '2029',
            startDay: (parseInt(this.state.y28.startDay) % 7 + 1).toString(),
            leapYear: 'f'
            }
        })

        this.setState({y30: {
            name: '2030',
            startDay: (parseInt(this.state.y29.startDay) % 7 + 1).toString(),
            leapYear: 'f'
            }
        })

        //Set the inital state 
        this.setState({value: this.state.y22.startDay})
        this.props.callbackFoo([this.state.y22.startDay, 'f'])
    }

    //function for onChange
    handleChange = (event) => {

        //Set the state value to be the value of the dropdown
        this.setState({value: event.target.value})

        //send this value to the parent so that the month can know what the start day is
        this.props.callbackFoo(event.target.value)
        console.log(event.target.value)
    }

    render() {

        return (

            //Dropdown for all the years
            <select onChange={(event) => this.handleChange(event)} name='yearDropdown'>
                <option value={[this.state.y22.startDay, this.state.y22.leapYear]} name={this.state.y22.name}> {this.state.y22.name} </option>
                <option value={[this.state.y23.startDay, this.state.y23.leapYear]} name={this.state.y23.name}> {this.state.y23.name} </option>
                <option value={[this.state.y24.startDay, this.state.y24.leapYear]} name={this.state.y24.name}> {this.state.y24.name} </option>
                <option value={[this.state.y25.startDay, this.state.y25.leapYear]} name={this.state.y25.name}> {this.state.y25.name} </option>
                <option value={[this.state.y26.startDay, this.state.y26.leapYear]} name={this.state.y26.name}> {this.state.y26.name} </option>
                <option value={[this.state.y27.startDay, this.state.y27.leapYear]} name={this.state.y27.name}> {this.state.y27.name} </option>
                <option value={[this.state.y28.startDay, this.state.y28.leapYear]} name={this.state.y28.name}> {this.state.y28.name} </option>
                <option value={[this.state.y29.startDay, this.state.y29.leapYear]} name={this.state.y29.name}> {this.state.y29.name} </option>
                <option value={[this.state.y30.startDay, this.state.y30.leapYear]} name={this.state.y30.name}> {this.state.y30.name} </option>
            </select>
        )
    }
}

export default YearDropdown