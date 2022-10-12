import React from 'react'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subject: "Science",
      lessonTitle: "A Solid Investigation",
      objective: "Students will be able to investigate solids",
      lessonType: "Lab",
      procedure: "Lorem Ipsum"
    }
}
handleChange = (event) => {
  this.setState({
    subject: event.target.value,
    lessonTitle: event.target.value,
    objective: event.target.value,
    lessonType: event.target.value,
    procedure: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  fetch(`${process.env.REACT_APP_BACKEND_URL} /activities`, {
    method: 'POST',
    body: JSON.stringify({subject: this.state.subject, lessonTitle: this.state.lessonTitle, objective: this.state.objective, lessonType: this.state.lessonType, procedure: this.state.procedure }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then (res => res.json())
    .then (resJson => {
      console.log('Form - resJson', resJson) 
      this.props.handleAddActivity(resJson)
      this.setState({
        subject: "Science",
        lessonTitle: "A Solid Investigation",
        objective: "Students will be able to investigate solids",
        lessonType: "Lab",
        procedure: "Lorem Ipsum"
      })
  }).catch (error => console.error({'Error': error}))
}

  render () {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>Subject:
      <input 
        type="text" 
        name="subject" 
        value={this.subject || ""} 
        onChange={this.handleChange}
      />
      </label>
      <label>lessonTitle:
        <input 
          type="text" 
          name="lessonTitle" 
          value={this.lessonTitle || ""} 
          onChange={this.handleChange}
        />
        </label>
        <label>Objective:
        <input 
          type="text" 
          name="objective" 
          value={this.objective || ""} 
          onChange={this.handleChange}
        />
        </label>
        <label>Lesson Type:
        <input 
          type="text" 
          name="lessonType" 
          value={this.lessonType || ""} 
          onChange={this.handleChange}
        />
        </label>
        <label>Procedure:
        <textarea
          type="text" 
          name="procedure" 
          value={this.state.procedure || ""} 
          onChange={this.handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
}

export default Form