

import React, {Component} from 'react'


// COMPONENTS
import Home from './components/home'

import Session from './components/session'

import MonthParent from './calendar/MonthParent'

import Subject from './components/subjects';

import orm from './components/form'
import './App.css';

import './index.css'

//https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
//Using Kirk Strobeck's answer as a guide for the drop down


   
class App extends Component {
  //add state
  constructor(props) {
    super(props)
    this.state = {
      activities: [],
    }
  }
/* 	componentDidMount() {
		this.getActivities();
	}

  loginUser = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })
    .then(res => res.json())
// .then(res => res.text())
// .then(text => console.log(text))
  .then(resJson => {
  console.log(resJson)
  //  refresh the page
})
  }

  register = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      //  refresh the page
    })
  }
 */
  getActivities = () => {
    fetch('http://localhost:3001/activities', {
      credentials: 'include'
    })
      .then((res) => {
       if (res.status === 200) {
       return res.json()
      }else{
       return []
      }
    })
    .then((data) => {
      if(data === []) {
        this.setState({ activities: data})
      }else{
        this.setState({activities: data.activities})
      }
    })
  }

  handleAddActivity = (activity) => {
    const copyActivity = [...this.state.activities]
    copyActivity.unshift(activity)
    this.setState({activity: copyActivity})
  }

  handleDelete = (id) => {
		fetch('http://localhost:3001/activities/' + id, {
			method: 'DELETE',
			credentials: "include"
		}).then( res => {
			const copyActivity = [...this.state.activities];
			const findIndex = this.state.activities.findIndex(
					(activity) => activity._id === id
				);
			 copyActivity.splice(findIndex, 1);
			 this.setState({ activities: copyActivity });
		})
	}
  
  render() {
    return (

<div>
<div><Home /></div>
    <div id="idxContent"> 
        {/* <div id="nav" className="nav"> */}
         {/*  <div id="logo"><img src='' alt="Digital TA Logo" className="logo"/></div>  */}
        {/* </div> */}
        {/* <div id='login'><Session loginUser={this.loginUser} register={this.register}/></div> */}
        <div className="dateContainer">     
        
          <div id= "date" className="date"></div>
        </div>

      <div>
   
        <div className="top">
            <Subject name ={''}/>
            <Subject name ={''}/>
            <Subject name ={''}/>
          
        </div> 
        {/* <div className="bottom">  */}
            {/* <Subject name ={''}/>
            <Subject name ={''}/>
            <Subject name ={''}/> */}
        {/* </div>    */}
      </div>
   </div>
</div>
  );
}
}


export default App