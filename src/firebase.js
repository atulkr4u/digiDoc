import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAnhiB_wxoh--be-bEt9Z9T5BpciAiyhbM",
  authDomain: "hellofirebase-d5b99.firebaseapp.com",
  databaseURL: "https://hellofirebase-d5b99.firebaseio.com",
  projectId: "hellofirebase-d5b99",
  storageBucket: "hellofirebase-d5b99.appspot.com",
  messagingSenderId: "860592191798",
  appId: "1:860592191798:web:ce4775af43033be8bf1b97",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
