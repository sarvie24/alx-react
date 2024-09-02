import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Footer user={{ name: 'John Doe' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
