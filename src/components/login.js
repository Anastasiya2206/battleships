import React from 'react';
import ReactDom from 'react-dom';

export default class Login extends React.Component {

  constructor(data){
    super(data);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }

  render(){
    return <div className='login-box'>
    <form method="POST" action="#" onSubmit={(e) => this.onSubmit(e)}>
      Enter your username:
      <input type="text" name="username"/>
      <input type="submit" value="Submit"/>
    </form>
    </div>
  }
}

ReactDom.render(<Login />, document.getElementById('login'))
