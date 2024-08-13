import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AppContext from './AppContext';

describe('App component', () => {
  it('should call markNotificationAsRead correctly', () => {
    const listNotifications = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ];
    const wrapper = shallow(
      <AppContext.Provider value={{ listNotifications, markNotificationAsRead: jest.fn() }}>
        <App />
      </AppContext.Provider>
    );
    wrapper.find('Notifications').prop('markNotificationAsRead')(1);
    expect(wrapper.find('Notifications').prop('listNotifications')).toHaveLength(1);
  });
});
