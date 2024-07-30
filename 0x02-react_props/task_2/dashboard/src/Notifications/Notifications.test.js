// task_2/dashboard/src/Notifications/Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    render(<Notifications />);
  });

  it('renders NotificationItem elements', () => {
    const { container } = render(<Notifications />);
    expect(container.querySelectorAll('li').length).toBe(3);
  });

  it('first NotificationItem element renders the correct html', () => {
    const { container } = render(<Notifications />);
    const firstNotification = container.querySelectorAll('li')[0];
    expect(firstNotification.textContent).toBe('New course available');
  });
});

