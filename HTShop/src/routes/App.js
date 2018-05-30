import  React,{Component} from 'react';
import { connect } from 'dva';// 引入connect

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import style from "./Container.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.margin = "0px";
    // 这是防止页面被拖拽
    document.body.addEventListener('touchmove', (ev) => {
      ev.preventDefault();
    });
  }

  render() {
    console.log(this.props);
    let {animateCls}=this.props.AppMd.AppMd;
    return (
      <ReactCSSTransitionGroup
        transitionName={animateCls}
        component="div"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}>
        <div key={this.props.location.pathname}
             style={{position:"absolute", width: "100%"}}>
          {
            this.props.children
          }
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

// 利用connect将组件与Redux绑定起来
export default connect((AppMd) => ({AppMd}))(App)
