import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should display notifications correctly', () => {
    const listNotifications = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find('p').length).toBe(2);
    expect(wrapper.find('p').at(0).text()).toBe('Notification 1');
    expect(wrapper.find('p').at(1).text()).toBe('Notification 2');
  });
});
