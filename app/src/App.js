
import React, {Component} from 'react'
// COMPONENTS
import home from './components/home'
import index from './components/index'
import login from './components/login'
import Month from './components/Month'
import MonthDropdown from './components/MonthDropdown'
import MonthParent from './components/MonthParent'
import show from './components/show'
import YearDropdown from './components/YearDropdown'

import './App.css';

//https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
//Using Kirk Strobeck's answer as a guide for the drop down

function App() {

  return (
   
class App extends Component {
  render() {
    return (
<div>
    <div id="idxContent"> {/* large parent div that holds all content of index page */}
        <div id="nav" className="nav"> {/* holds logo */}
          <div id="logo"><img src={logo} alt="Digital TA Logo" className="logo"/></div> {/* logo png source */}
        </div>
        <div className="dateContainer"> {/* container that holds the date */}
          <div id= "date" className="date">Date</div>{/* the date */}
        </div>
      <div>{/* this is the parent container to the index tabs that hold each lesson plan. */}
        <div className="top"> {/* top half of lesson plan index tabs */}
            <Subject name ={''}/>
            <Subject name ={''}/>
            <Subject name ={''}/>
        </div> 
        <div className="bottom"> {/* bottom half of lesson plan index tabs*/}
            <Subject name ={''}/>
            <Subject name ={''}/>
            <Subject name ={''}/>
        </div>   
      </div>
   </div>
</div>
  );
}
}

  )}
export default App