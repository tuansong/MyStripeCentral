import React from 'react';
import Payment from './Payment';

class Payments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
        }
        this.getPayments = this.getPayments.bind(this);
        this.sortAmount = this.sortAmount.bind(this);
    }

    componentDidMount() {
        this.getPayments();
    }

    async getPayments() {
        this.setState({
            loading: true
        })
        const paymentsData = await this.props.getSecret('charges');
        this.setState({
            data: paymentsData.data,
            loading: false
        });
    }

    sortAmount() {
        let data = this.state.data;
        let sortedData = data.sort((a,b) => a.amount - b.amount);
        this.setState({
            data: sortedData
        });
    }

    render() {
        const payments = this.state.data.map(p => {
            return <Payment payment={p} key={p.id}/>;
        })
        return (
            <div>
                <h2>Payments</h2>
                {this.state.loading ? <div>Loading ...</div> : null}
                <table>
                    <thead>
                        <tr>
                            <td><strong onClick>Id</strong></td>
                            <td onClick={this.sortAmount}><strong>Amount</strong></td>
                            <td><strong>Refunded</strong></td>
                            <td><strong>Desputed</strong></td>
                            <td><strong>Refund</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {payments}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Payments;