import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    render(<NotificationItem />);
  });

  it('renders correct html with type and value props', () => {
    const { container } = render(<NotificationItem type="default" value="test" />);
    expect(container.querySelector('li[data-notification-type="default"]').textContent).toBe('test');
  });

  it('renders correct html with html prop', () => {
    const { container } = render(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(container.querySelector('li[data-notification-type="default"]').innerHTML).toBe('<u>test</u>');
  });
});

