import React, { Component } from 'react';
import './App.css';
import TabList from './components/TabList';
import Tab from './components/Tab';
import Checkout from './components/Checkout';
import { callStripe } from './components/HOC/StripeApi';

const publicKey = `pk_test_EkIBvnp1PdCW9B6WWgPJePMF`;
const secretKey = `sk_test_VGHOeXpBmLss7oNI0d73H5iK`;

const HigherCheckout = callStripe(Checkout, publicKey, secretKey)

class App extends Component {
    render() {
    return (
      <TabList>
        <Tab name="Checkout">
        <HigherCheckout />
        </Tab>
        <Tab name="Payment">
          <div><h2>Hello B</h2></div>
        </Tab>
        <Tab name="c">

        </Tab>
      </TabList>
    );
  }
}

export default App;
