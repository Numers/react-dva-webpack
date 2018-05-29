import React from 'react';
import { connect } from 'dva';
import Login from '../components/Login';

const LoginPage = ({location, dispatch, login}) => {
  const props = {
    ...login,
    back(){
      dispatch({
        type: 'AppMd/setCurAnimate',
        curAnimate:'right'
      });
      window.history.go(-1);
    }
  };

  return (
    <Login {...props}/>
  );
};

function mapState({login}) {
  return {
    login
  };
}

export default connect(mapState)(LoginPage);
