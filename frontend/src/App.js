import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HatsScreen from './screens/HatsScreen';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import SignInSignUpScreen from './screens/SignInSignUpScreen';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/actions/userActions';

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <>
      <Header currentUser />
      <Route exact path='/' component={HomeScreen} />
      <Route path='/hats' component={HatsScreen} />
      <Route path='/shop' component={ShopScreen} />
      <Route
        exact
        path='/signin'
        render={() =>
          currentUser ? <Redirect to='/' /> : <SignInSignUpScreen />
        }
      />{' '}
    </>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
