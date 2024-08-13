import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('should have submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('should enable submit button after changing email and password', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});
