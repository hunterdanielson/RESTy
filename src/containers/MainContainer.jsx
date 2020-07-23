import React, { Component } from 'react';
import InputForm from '../components/inputForm/InputForm';
import Display from '../components/display/Display';
import { requestAPI } from '../services/requestAPI';

export default class MainContainer extends Component {
  state = {
    urlRequest: '',
    requestType: 'GET',
    requestBody: '',
    response: { 'title': 'submit a request' }
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { urlRequest, requestType, requestBody } = this.state;

    requestAPI(urlRequest, requestType, requestBody)
      .then(response => this.setState({ response }));

  }

  render() {
    const { urlRequest, requestBody, response } = this.state;
  
    return (
      <div>
        <h1>RESTy</h1>
        <InputForm urlRequest={urlRequest} requestBody={requestBody} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Display response={response}/>
        
      </div>
    );
  }
}



