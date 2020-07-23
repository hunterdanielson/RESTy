import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';
import ReactJson from 'react-json-view';

const Display = ({ response }) => (
  <>
    <pre className={styles.Display}>
      <ReactJson src={response} displayDataTypes={false} theme='harmonic' />
    </pre>
  </>
);

Display.propTypes = {
  response: PropTypes.shape.isRequired
};

export default Display;
