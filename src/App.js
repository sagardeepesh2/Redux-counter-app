import React, { Fragment } from 'react';
import {useSelector } from 'react-redux';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import User from './components/UserProfile';

function App() {
  const auth = useSelector(state => state.auth);
  return (
    <Fragment>
      <Header />
      {!auth && <Auth />}
      {auth&&<Counter />}
    </Fragment>
  );
}

export default App;
