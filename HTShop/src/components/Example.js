import React from 'react';
import {Button, WhiteSpace, WingBlank} from 'antd-mobile';
import './style.css';

class Example extends React.Component{
  clickBtn(e)
  {
    e.preventDefault();
    console.log("click btn1");
    this.props.add();
  }
  render(){
    const {count} = this.props;
    console.log(this.props);
    return(
      <WingBlank>
        <Button onClick={(e)=>{this.clickBtn(e)}}>start</Button><WhiteSpace/>
        <li className="fontColor">
          this is Example4{this.props.count == 1 ? <div className="subFontColor">hahaha</div>:null}
        </li>
      </WingBlank>
    );
  }
}

Example.propTypes = {
};

export default Example;
