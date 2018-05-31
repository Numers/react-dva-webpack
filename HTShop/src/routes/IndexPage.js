import React from 'react';
import { connect } from 'dva';
import {routerRedux} from 'dva/router';
import styles from './IndexPage.css';
import Example from '../components/Example';

const IndexPage = ({location, dispatch, example}) => {
  const props = {
    ...example,

    add(){
      dispatch({
        type:"example/add",
        payload:{

        }
      });
    },

    pushToLogin(){
      dispatch({
        type: 'AppMd/setCurAnimate',
        curAnimate:'left'
      });

      dispatch(routerRedux.push({ pathname: '/login' }));
    }
  };

  return (
    <Example {...props}/>
  );
};

function mapState({example}) {
  return {
    example
  };
}

export default connect(mapState)(IndexPage);
