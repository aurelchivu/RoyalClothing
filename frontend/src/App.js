import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HatsScreen from './screens/HatsScreen';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import SignInSignUpScreen from './screens/SignInSignUpScreen';

import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
      <Route exact path='/' component={HomeScreen} />
      <Route path='/hats' component={HatsScreen} />
      <Route path='/shop' component={ShopScreen} />
      <Route path='/signin' component={SignInSignUpScreen} />
    </>
  );
}

export default App;
