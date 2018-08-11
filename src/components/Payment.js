import React from 'react';

class Payment extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.payment.id}</td>
                <td>{this.props.payment.amount}</td>
                <td>{this.props.payment.refunded.toString()}</td>
                <td>{(this.props.payment.dispute != null).toString()}</td>
                <td>{this.props.payment.refundReason}</td>
                <td><input type="checkbox"/></td>
            </tr>
        )
    }
}

export default Payment;