import React from 'react';
import {Button, WhiteSpace, WingBlank} from 'antd-mobile';

class Example extends React.Component{
  render(){
    const {count} = this.props;
    console.log(this.props);
    return(
      <WingBlank>
        <Button>start</Button><WhiteSpace/>
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
