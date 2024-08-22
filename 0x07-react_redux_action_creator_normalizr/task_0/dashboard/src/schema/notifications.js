import * as notificationsData from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  const notifications = notificationsData.notifications;
  const userNotifications = [];

  notifications.forEach((notification) => {
    if (notification.author.id === userId) {
      userNotifications.push(notification.context);
    }
  });

  return userNotifications;
};

export default getAllNotificationsByUser;
