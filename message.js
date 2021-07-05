import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  constructor() {
      super()
      this.state={
        message:'Welcome visitor...!'
      }
    }
changeMessage(){
/* change the state of the component by calling set state methode*/
this.setState({   
    message: 'Thank you for subscribing...!'
})

}
    render(){
    return (
    <div>
    <h2>{this.state.message} </h2>
    <button onClick={() => this.changeMessage()}>Subscribe</button> 
    {/*<button onClick={this.changeMessage()}>Subscribe</button> */} 
    </div>
    )
  }
}

ReactDOM.render(<Message />, document.getElementById('root'));
export default Message;