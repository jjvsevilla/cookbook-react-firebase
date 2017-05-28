import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCoLXd0bkWBvsFE5yPmtWT9i1NnVVbxGTI",
  authDomain: "cookbook-react-firebase.firebaseapp.com",
  databaseURL: "https://cookbook-react-firebase.firebaseio.com",
  projectId: "cookbook-react-firebase",
  storageBucket: "cookbook-react-firebase.appspot.com",
  messagingSenderId: "1090474301136"
};
firebase.initializeApp(config);
/*
  configure firebase rules for test
  {
    "rules": {
      ".read": true,
      ".write": true
    }
  }
*/

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
registerServiceWorker();
