import './index.css'

const DenominationItem = props => {
  const {denominationsList, updateBalance} = props
  const {value} = denominationsList
  const onClicks = () => {
    updateBalance(value)
  }
  return (
    <li className="list-item">
      <button className="btn" type="button" onClick={onClicks}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
