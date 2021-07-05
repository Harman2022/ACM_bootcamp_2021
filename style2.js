import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    //Instead of defining the style object inline, 
    //we could also define an object (styles here) in our code that stores the style properties.
    render() {
        const styles = {
          color: 'blue',
          backgroundColor: "lightblue",
          padding: "50px",
          fontFamily: "Arial"
          }
          
      
        return (
            <p style={styles}>
              Example Text
            </p>
             ); } }
export default App;