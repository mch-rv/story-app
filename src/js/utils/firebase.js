// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5z3VZOtxCJloYPwEIvRBs4dJ7_ZzSCd8',
  authDomain: 'story-app-2b9cd.firebaseapp.com',
  projectId: 'story-app-2b9cd',
  storageBucket: 'story-app-2b9cd.appspot.com',
  messagingSenderId: '1028175873957',
  appId: '1:1028175873957:web:91dd440876b83e39bb0a4c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
