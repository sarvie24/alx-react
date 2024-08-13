import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AppContext from './AppContext';

describe('App component', () => {
  it('should render Login component by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  it('should render CourseList component when user is logged in', () => {
    const user = { email: 'test@example.com', isLoggedIn: true };
    const logOut = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext
