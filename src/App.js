import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';

import {auth} from './firebase'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe(
  'pk_test_51HVBIuDW83AN07Msjxmlui6txmypB938seCUdKw7jkWYLhfNmxa2a3wJ3E1rYZg1FZZk0xFpHrQ93bGX0MqRnuFO00tjbjzCtr'
  );

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>', authUser);
      
      if(authUser){
        //the user just loggin in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is slogged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="app">

        <Switch>
        <Route path="/orders">
        <Header/>
          <Orders/>
          </Route>
        <Route path="/login">
          <Login/>
          </Route>
        <Route path="/checkout">
        <Header/>
          <Checkout />
          </Route>
          <Route path="/payment">
        <Header/>
        <Elements stripe={promise}>
        <Payment/>
        </Elements>
          </Route>
          <Route path="/">
          <Header/>
          <Home/>
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
