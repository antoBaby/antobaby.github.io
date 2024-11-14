// sw.js
self.addEventListener('push', function(event) {
  const data = "data ";
  const options = {
    body: 'Default' || 'Default body',
    icon: 'icon.png',
    vibrate: [100, 50, 100],
    data: { url:  "https://github.com/antoBaby/antobaby.github.io/blob/main/index.html" } // Optional URL
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Notification', options)
  );
});

// Handle notification click event
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data.url;
  event.waitUntil(
    clients.openWindow(url)
  );
});
