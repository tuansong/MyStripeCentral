import React, { Component } from 'react'

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastestCharge: 'none'
    }
    this.createCharge = this.createCharge.bind(this);
  }

  async createCharge() {
    const creditCardInfo = {
      'card[number]': '4242424242424242',
      'card[exp_month': '02',
      'card[exp_year]': '2019'
    }

    const chargeInfo = {
      'amount': '200',
      'currency': 'usd',
      'description': 'test_charge_codewalkthrough',
      'source': null
    }

    this.setState({
      lastestCharge: 'Creating token...'
    });

    const tokenData = await this.props.postPublic('tokens', creditCardInfo);
    console.log(tokenData);

    this.setState({
      lastestCharge: 'Creating charge...'
    });

    chargeInfo['source'] = tokenData.id
    console.log(chargeInfo);
    const chargeData = await this.props.postSecret('charges', chargeInfo);
    console.log(chargeData);

    this.setState({
      lastestCharge: chargeData.id
    })
  }


  render() {
    return (
      <div>
        <h2>Checkout 200$</h2>
        <button onClick={this.createCharge}>Charge$</button>
        <h3>Lastest charge is {this.state.lastestCharge}</h3>
      </div>
    )
  }
}
