import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  return (
    <div>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }} />
      </ul>
    </div>
  );
};

export default Notifications;

