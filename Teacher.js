import React from 'react';
import ReactDOM from 'react-dom';
function Student (props){
    return <h2>Student name: {props.n}</h2>;
    }
  class Teacher1 extends React.Component {
    render() {
      return (
        <h1>Teacher name: {this.props.n} </h1>
      )}}
  
  class Teacher extends React.Component {
  render() {
    return (
      <div>
      <Teacher1 n='Raman'/>
      <Student n='Ajay'/>
      <Student n='Sanjay'/>
      <Student n='Aman'/>
      </div>              
    );
  }
}
//ReactDOM.render(<Teacher />, document.getElementById('root'));
export default Teacher;