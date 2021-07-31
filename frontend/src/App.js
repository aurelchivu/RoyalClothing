import { Route } from 'react-router-dom';

import './App.css';

import HomeScreen from './screens/HomeScreen';
import HatsScreen from './screens/HatsScreen';
import ShopScreen from './screens/ShopScreen';

function App() {
  return (
    <>
      <Route exact path='/' component={HomeScreen} />
      <Route path='/hats' component={HatsScreen} />
      <Route path='/shop' component={ShopScreen} />
    </>
  );
}

export default App;
