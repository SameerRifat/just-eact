importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyB5y9lU-KkLylHHQhuW7VwwgHwDAuK8lGs",
    authDomain: "dialet-29c94.firebaseapp.com",
    projectId: "dialet-29c94",
    storageBucket: "dialet-29c94.appspot.com",
    messagingSenderId: "796266300035",
    appId: "1:796266300035:web:d63e4b7d112f28cc7191b6",
    measurementId: "G-5WZTZ4K3R6"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
