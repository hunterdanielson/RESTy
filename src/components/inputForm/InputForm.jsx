import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputForm.css';

const InputForm = ({ urlRequest, requestBody, onChange, onSubmit }) => (
  <form className={styles.InputForm} onSubmit={onSubmit}>
    <input type="text" value={urlRequest} onChange={onChange} name='urlRequest' />
    <section>
      <label htmlFor='GET'>GET</label>
      <input id='GET' type='radio' value='GET' name='requestType' onChange={onChange} defaultChecked />
      <label htmlFor='POST'>POST</label>
      <input id='POST' type='radio' value='POST' name='requestType' onChange={onChange} />
      <label htmlFor='PUT'>PUT</label>
      <input id='PUT' type='radio' value='PUT' name='requestType' onChange={onChange} />
      <label htmlFor='DELETE'>DELETE</label>
      <input id='DELETE' type='radio' value='DELETE' name='requestType' onChange={onChange} />
    </section>

    <textarea type='text' onChange={onChange} value={requestBody} name='requestBody' rows='15' cols='60'/>

    <button>Submit</button>
  </form>
);

InputForm.propTypes = {
  urlRequest: PropTypes.string.isRequired,
  requestBody: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default InputForm;
