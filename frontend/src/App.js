import { Route } from 'react-router-dom';

import './App.css';

import HatsScreen from './screens/HatsScreen';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';

function App() {
  return (
    <>
      <Header />
      <Route exact path='/' component={HomeScreen} />
      <Route path='/hats' component={HatsScreen} />
      <Route path='/shop' component={ShopScreen} />
    </>
  );
}

export default App;
 