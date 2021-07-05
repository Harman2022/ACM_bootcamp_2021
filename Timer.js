import React from 'react';

import ReactDOM from 'react-dom';



class Timer extends React.Component 

{

    constructor() {

      super();

      this.state = { seconds: 0 };    }

  

    updatetime() {

      this.setState(state => ({

        seconds: state.seconds + 5

      }));

    }

  //The componentDidMount() method allows us to execute the React code when the component

  // is already placed in the DOM (Document Object Model). 

  //This method is called during the Mounting phase of the React Life-cycle 

  //i.e after the component is rendered.

    Start() {

      this.interval = setInterval(() => this.updatetime(), 5000);

      //The setInterval() method calls a function or evaluates an expression at

      // specified intervals (in milliseconds).

    }

    Stop() {

      clearInterval(this.interval); 

      

    }

         render() {

      return (

        <div>

          Seconds: {this.state.seconds}

          <br></br>

          <br></br>

          <button onClick={()=>this.Start()}>Start Timer</button>

          <br></br>

          <br></br>

          <button onClick={()=>this.Stop()}>Stop Timer</button>

          

        </div>

      );

    }

  }

    ReactDOM.render(<Timer />, document.getElementById('root'));

  export default Timer;