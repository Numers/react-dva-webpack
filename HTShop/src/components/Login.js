import React from 'react';
import {Button, WingBlank} from 'antd-mobile';

class Login extends React.Component{
  clickBtn(e)
  {
    this.props.back();
  }
  render(){
    return(
      <WingBlank>
        <Button onClick={(e)=>{this.clickBtn(e)}}>start</Button>
        <li>
          this is login view
        </li>
      </WingBlank>
    );
  }
}

Login.propTypes = {
};

export default Login;
