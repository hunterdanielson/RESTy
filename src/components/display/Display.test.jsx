import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Display response={{ 'key': 'value' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
