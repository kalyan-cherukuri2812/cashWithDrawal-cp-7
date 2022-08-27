import './index.css'

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prev => ({
      balance: prev.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'cherukuri kalyan'
    const initial = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="card">
          <div className="sub-1">
            <p className="p1">{initial}</p>
            <p className="h1">{name}</p>
          </div>
          <div className="sub-2">
            <p className="p2">Your Balance</p>
            <div className="sub-2-2">
              <p className="h2">{balance}</p>
              <p className="p3">In Rupees</p>
            </div>
          </div>
          <div className="sub-3">
            <p className="h3">Withdraw</p>
            <p className="p3">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="ulist">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationsList={each}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
