import React from 'react';
import ReactDOM from 'react-dom';


class Employee extends React.Component {
  render() {
    return <h2>I am an employee. {this.props.children}</h2>;
  }
}

ReactDOM.render(<Employee />, document.getElementById('root'));

    export default Employee ;