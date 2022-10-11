import React, { Component } from 'react';
import '../index.css';

// let baseURL = process.env.REACT_APP_BACKEND_URL

class Subject extends Component {
   constructor(props) {
    super(props)
    this.state = {
      activities: [],
    }
  } 

	componentDidMount() {
		this.getActivities();
	}

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
        this.setState({ activities: data })
      }else{
        this.setState({ activities: data.activities })
      }
    })
  }

  handleAddActivity = (activity) => {
    const copyActivity = [...this.state.activities]
    copyActivity.unshift(activity)
    this.setState({ activity: copyActivity })
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

<div className="subjectContainer">  
      <table>
                <tbody>
                  {this.state.activities.map((activity) => {
                    return (
                      <tr key={activity._id}>
                        <td className="subjectName">
                          {activity.completed ? 'completed' : null}
                          {activity.name}
                        </td>
                        <tr><td> {activity.type} : </td></tr>
                        <td> {activity.subject} </td>
                        <td onClick={() => this.handleDelete(activity._id)}>X</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
     
//         <div className="subjectContainer"> {/* each individual subject tab*/}
//           <div>{/* container that holds the text contents*/}
//             <h2 className="subjectName">Subject</h2>
//             <h2 className="lessonTitle">Lesson Title</h2>
//             <h3 className="objective">Objective</h3>
//             <h3 className="lessonType">Lesson Type</h3>
//             <input type="button" value="Create Lesson" className="createLesson"/>
//             <input type='button' value='delete' onClick={() => this.handleDelete(activities._id)}/>
//           </div>
//         </div>
      

    )
  }
}

export default Subject;
