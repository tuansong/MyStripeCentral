import React, { Component } from 'react';
import './App.css';
import TabList from './components/TabList';
import Tab from './components/Tab';
import Checkout from './components/Checkout';
import { callStripe } from './components/HOC/StripeApi';
import Payments from './components/Payments';

const publicKey = `pk_test_EkIBvnp1PdCW9B6WWgPJePMF`;

const HigherCheckout = callStripe(Checkout, publicKey, secretKey);
const HigherPayments = callStripe(Payments, publicKey, secretKey);


class App extends Component {
  render() {
    return (
      <TabList>
        <Tab name="Checkout">
          <HigherCheckout />
        </Tab>
        <Tab name="Payment">
          <HigherPayments />
        </Tab>
      </TabList>
    );
  }
}

export default App;
