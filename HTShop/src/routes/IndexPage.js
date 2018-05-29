import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Example from '../components/Example';

const IndexPage = ({location, dispatch, example}) => {
  const props = {
    ...example,

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
