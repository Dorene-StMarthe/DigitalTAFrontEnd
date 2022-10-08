import React from 'react';

class Show extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (

    <div class="container">
        <nav><img src="/app/src/purplelogo.png" class="logo" alt="digital TA logo"/></nav>
        <div class="scroll"></div>
    <button type ="button" class="submit">Submit Changes</button>
    </div>
 )
}
}

export default Show;