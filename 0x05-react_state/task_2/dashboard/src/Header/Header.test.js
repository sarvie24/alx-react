import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import AppContext from '../../App/AppContext';

describe('Header component', () => {
  it('should not display logout section by default', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('should display logout section when user is logged in', () => {
    const user = { email: 'test@example.com', isLoggedIn: true };
    const logOut = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  it('should call logOut function when clicking on logout link', () => {
    const user = { email: 'test@example.com', isLoggedIn: true };
    const logOut = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOut).toHaveBeenCalledTimes(1);
  });
});
