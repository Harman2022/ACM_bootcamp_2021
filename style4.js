import React, {Component} from 'react';
import './App.css';
import Radium from 'radium';
//Radium is a set of tools to manage inline styles on React elements.
// It gives you powerful styling capabilities
class App extends Component {
   render(){
      let myStyle={
         boxShadow:'0 2px 3px #ccc',
         border:'2px solid blue',
         padding:'20px',
         color:'yellow',
         background:'blue',
         marginTop:'50px',
         ':hover':{
            background:'white',
            
            }
       
      }
      return (
         <div className="App">
            <p className="myClass" style={myStyle}><b>This is background Style</b></p>
         </div>
      );
   }
}
export default Radium(App);