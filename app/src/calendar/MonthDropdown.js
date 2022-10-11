import React, { useEffect } from "react";
import { useState } from "react";

function MonthDropdown(props) {

    //Saves all of the months 
    const [months, setMonths] = useState ({ monthMaster : {
        Jan: {
            name: 'January',
            startDay: '2', //How to set this as this.props.startDay?
            length: 31,
        },

        Feb: {
            name: 'February',
            startDay: '',
            length: 28 
        },

        Mar: {
            name: 'March',
            startDay: '',
            length: 31
        },

        Apr: {
            name: 'April',
            startDay: '',
            length: 30
        },

        May: {
            name: 'May',
            startDay: '',
            length: 31  
        },

        Jun: {
            name: 'June',
            startDay: '',
            length: 30 
        },

        Jul: {
            name: 'July',
            startDay: '',
            length: 31 
        },

        Aug: {
            name: 'August',
            startDay: '',
            length: 31 
        },

        Sep: {
            name: 'September',
            startDay: '',
            length: 30  
        },

        Oct: {
            name: 'October',
            startDay: '',
            length: 31  
        },

        Nov: {
            name: 'November',
            startDay: '',
            length: 30  
        },

        Dec: {
            name: 'December',
            startDay: '',
            length: 31  
        },
    }

    })
console.log(months)
    //Function for onChange
    const handleChange = (event) => {

        if (props.leapYear === 't') {
                setMonths({ ...months, monthMaster: {
                    Jan: {
                        name: 'January',
                        startDay: props.startDay,
                        length: 31,
                    },
                    
                    Feb : {
                        name: 'February',
                        startDay: ((((parseInt(months.monthMaster.Jan.startDay) + (months.monthMaster.Jan.length % 7)) -1) % 7) + 1).toString(),
                        length: 29
                    },

                    Mar: {
                        name: 'March',
                        startDay: ((((parseInt(months.monthMaster.Feb.startDay) + (months.monthMaster.Feb.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    },

                    Apr: {
                        name: 'April',
                        startDay: ((((parseInt(months.monthMaster.Mar.startDay) + (months.monthMaster.Mar.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    May: {
                        name: 'May',
                        startDay: ((((parseInt(months.monthMaster.Apr.startDay) + (months.monthMaster.Apr.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    },

                    Jun: {
                        name: 'June',
                        startDay: ((((parseInt(months.monthMaster.May.startDay) + (months.monthMaster.May.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    Jul: {
                        name: 'July',
                        startDay: ((((parseInt(months.monthMaster.Jun.startDay) + (months.monthMaster.Jun.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    },

                    Aug: {
                        name: 'August',
                        startDay: ((((parseInt(months.monthMaster.Jul.startDay) + (months.monthMaster.Jul.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    },

                    Sep: {
                        name: 'September',
                        startDay: ((((parseInt(months.monthMaster.Aug.startDay) + (months.monthMaster.Aug.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    Oct: {
                        name: 'October',
                        startDay: ((((parseInt(months.monthMaster.Sep.startDay) + (months.monthMaster.Sep.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    Nov: {
                        name: 'November',
                        startDay: ((((parseInt(months.monthMaster.Oct.startDay) + (months.monthMaster.Oct.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    Dec: {
                        name: 'December ',
                        startDay: ((((parseInt(months.monthMaster.Nov.startDay) + (months.monthMaster.Nov.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    }
                }
            })
            } else {
                setMonths({ ...months, monthMaster: {
                    Jan: {
                        name: 'January',
                        startDay: props.startDay,
                        length: 31,
                    },
                    
                    Feb : {
                        name: 'February',
                        startDay: ((((parseInt(months.monthMaster.Jan.startDay) + (months.monthMaster.Jan.length % 7)) -1) % 7) + 1).toString(),
                        length: 28 
                    },

                    Mar: {
                        name: 'March',
                        startDay: ((((parseInt(months.monthMaster.Feb.startDay) + (months.monthMaster.Feb.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    },

                    Apr: {
                        name: 'April',
                        startDay: ((((parseInt(months.monthMaster.Mar.startDay) + (months.monthMaster.Mar.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    May: {
                        name: 'May',
                        startDay: ((((parseInt(months.monthMaster.Apr.startDay) + (months.monthMaster.Apr.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    },

                    Jun: {
                        name: 'June',
                        startDay: ((((parseInt(months.monthMaster.May.startDay) + (months.monthMaster.May.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    Jul: {
                        name: 'July',
                        startDay: ((((parseInt(months.monthMaster.Jun.startDay) + (months.monthMaster.Jun.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    },

                    Aug: {
                        name: 'August',
                        startDay: ((((parseInt(months.monthMaster.Jul.startDay) + (months.monthMaster.Jul.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    },

                    Sep: {
                        name: 'September',
                        startDay: ((((parseInt(months.monthMaster.Aug.startDay) + (months.monthMaster.Aug.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    Oct: {
                        name: 'October',
                        startDay: ((((parseInt(months.monthMaster.Sep.startDay) + (months.monthMaster.Sep.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    Nov: {
                        name: 'November',
                        startDay: ((((parseInt(months.monthMaster.Oct.startDay) + (months.monthMaster.Oct.length % 7)) -1) % 7) + 1).toString(),
                        length: 30
                    },

                    Dec: {
                        name: 'December ',
                        startDay: ((((parseInt(months.monthMaster.Nov.startDay) + (months.monthMaster.Nov.length % 7)) -1) % 7) + 1).toString(),
                        length: 31
                    }
                }
            })
        }

        //Callback function to send start day and length to the parent that renders the month
        props.callbackFoo(event.target.value)
        console.log(event.target.value)
    }
     
        console.log(months)
        console.log(months.monthMaster.Jan.startDay)
    return (
        <div>
        <select onChange={(event) => handleChange(event)} name='monthDropdown'>
            <option value={[months.monthMaster.Jan.startDay, months.monthMaster.Jan.length]} name={months.monthMaster.Jan.name}>{months.monthMaster.Jan.name}</option>
            <option value={[months.monthMaster.Feb.startDay, months.monthMaster.Feb.length]} name={months.monthMaster.Feb.name}>{months.monthMaster.Feb.name}</option>
            <option value={[months.monthMaster.Mar.startDay, months.monthMaster.Mar.length]} name={months.monthMaster.Mar.name}>{months.monthMaster.Mar.name}</option>
            <option value={[months.monthMaster.Apr.startDay, months.monthMaster.Apr.length]} name={months.monthMaster.Apr.name}>{months.monthMaster.Apr.name}</option>
            <option value={[months.monthMaster.May.startDay, months.monthMaster.May.length]} name={months.monthMaster.May.name}>{months.monthMaster.May.name}</option>
            <option value={[months.monthMaster.Jun.startDay, months.monthMaster.Jun.length]} name={months.monthMaster.Jun.name}>{months.monthMaster.Jun.name}</option>
            <option value={[months.monthMaster.Jul.startDay, months.monthMaster.Jul.length]} name={months.monthMaster.Jul.name}>{months.monthMaster.Jul.name}</option>
            <option value={[months.monthMaster.Aug.startDay, months.monthMaster.Aug.length]} name={months.monthMaster.Aug.name}>{months.monthMaster.Aug.name}</option>
            <option value={[months.monthMaster.Sep.startDay, months.monthMaster.Sep.length]} name={months.monthMaster.Sep.name}>{months.monthMaster.Sep.name}</option>
            <option value={[months.monthMaster.Oct.startDay, months.monthMaster.Oct.length]} name={months.monthMaster.Oct.name}>{months.monthMaster.Oct.name}</option>
            <option value={[months.monthMaster.Nov.startDay, months.monthMaster.Nov.length]} name={months.monthMaster.Nov.name}>{months.monthMaster.Nov.name}</option>
            <option value={[months.monthMaster.Dec.startDay, months.monthMaster.Dec.length]} name={months.monthMaster.Dec.name}>{months.monthMaster.Dec.name}</option>
        </select>
        </div>
    )
    
}

export default MonthDropdown