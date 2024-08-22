import normalizeNotifications from './notifications';
import * as notificationsData from '../../notifications.json';

const normalizedData = normalizeNotifications(notificationsData.notifications);

const getAllNotificationsByUser = (userId) => {
  const userNotifications = [];

  for (const notificationId of normalizedData.result) {
    const notification = normalizedData.entities.notifications[notificationId];
    if (notification.author === userId) {
      userNotifications.push(notification);
    }
  }

  return userNotifications;
};

export default getAllNotificationsByUser;
