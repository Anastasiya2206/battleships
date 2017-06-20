import React from 'react';
import ReactDom from 'react-dom';

const Login = () => (
  <div className='login-box'>
    <form method="POST" action="/join">
      Enter your username:
      <input type="text" name="username"/>
      <input type="submit" value="Submit"/>
    </form>
  </div>
)

ReactDom.render(<Login />, document.getElementById('login'))
