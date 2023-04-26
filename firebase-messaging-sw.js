importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyC31qLrmr8GynvQfhDSBmwMS182tR1Cnxk",
  authDomain: "tokenmanager-78c3d.firebaseapp.com",
  databaseURL: "https://tokenmanager-78c3d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tokenmanager-78c3d",
  storageBucket: "tokenmanager-78c3d.appspot.com",
  messagingSenderId: "516470203337",
  appId: "1:516470203337:web:36ff7aa11e99f7c2167e18",
  measurementId: "G-SWF1F588MN"
}

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {  
  console.log('[firebase-messaging-sw.js] Received background message ', payload);  // Customize notification here
  const notificationTitle = 'Title';
  const notificationOptions = {
  body: payload,
}; 
self.registration.showNotification(notificationTitle, notificationOptions);
});

