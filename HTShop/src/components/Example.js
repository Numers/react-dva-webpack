import React from 'react';
import {Button, WhiteSpace, WingBlank} from 'antd-mobile';

class Example extends React.Component{
  clickBtn(e)
  {
    console.log("click btn1");
    this.props.add();
  }
  render(){
    const {count} = this.props;
    console.log(this.props);
    return(
      <WingBlank>
        <Button onClick={(e)=>{this.clickBtn(e)}}>start</Button><WhiteSpace/>
        <li>
          this is Example{this.props.count == 1 ? <div>hahaha</div>:null}
        </li>
      </WingBlank>
    );
  }
}

Example.propTypes = {
};

export default Example;
