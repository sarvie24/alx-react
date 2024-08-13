import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import AppContext from '../../App/AppContext';

describe('Footer component', () => {
  it('should not display contact link when user is logged out', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('should display contact link when user is logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
