// import './App.css';
// import './index.css';
import React from 'react';
import Feed from './Feed';
import Chat from './Chat';
import LogIn from './LogIn';
import SingUp from './SignUp';
import Premium from './Premium';
import ReactDOM from 'react-dom';
import ImageIntro from './imageIntro';
import ReviewPage from './ReviewPage';
import UserProfile from './userProfile';
import OtherUserProfile from './OtherUserProfile';
import reportWebVitals from './reportWebVitals';

const singUp = (
  <React.StrictMode>
    <SingUp />
  </React.StrictMode>
);

const logIn = (
  <React.StrictMode>
    <LogIn />
  </React.StrictMode>
);

const feed = (
  <React.StrictMode>
    <Feed />
  </React.StrictMode>
);

const premium = (
  <React.StrictMode>
    <Premium />
  </React.StrictMode>
);

const userprofile = (
  <React.StrictMode>
    <UserProfile />
  </React.StrictMode>
);

const reviewPage = (
  <React.StrictMode>
    <ReviewPage />
  </React.StrictMode>
);

const imageIntro = (
  <React.StrictMode>
    <ImageIntro />
  </React.StrictMode>
);

const myProfile = (
  <React.StrictMode>
    <UserProfile />
  </React.StrictMode>
);

const otherUser = (
  <React.StrictMode>
    <OtherUserProfile />
  </React.StrictMode>
);  

const chat = (
  <React.StrictMode>
    <Chat />
  </React.StrictMode>
);

ReactDOM.render(
  myProfile,
  document.getElementById('root')
);

// *****************************
// *****************************

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
