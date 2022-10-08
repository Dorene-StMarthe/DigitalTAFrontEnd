import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
<div className="container">
    <div>
        <div className="profileContainer">
           <nav><img src="/app/src/whitelogo.png" alt="digital TA logo"/></nav>
            <div className="userInfo">
                <div><img src="https://thumbs.dreamstime.com/b/arab-woman-hijab-avatar-muslim-girl-covered-scarf-social-network-profile-face-eastern-islam-culture-199910794.jpg" alt='user'/>
                </div>
            </div>
            <div>
                <h2>Hello, User</h2>
                <h3>3rd Grade, Homeroom B</h3>
            </div> 
        </div>
       <div className="calenderContainer">
            <div className="calender">
                Calender goes here
            </div>
        </div>
    </div>
</div>
   )
  }
}

export default Home;