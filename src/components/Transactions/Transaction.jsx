import css from './Transactions.module.css'
import PropTypes from 'prop-types';


export function Transaction({ items }) {
  return (
    <table className={css.transactionHistory} >
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        )
        )}
  </tbody>
</table>
  )
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )

}
