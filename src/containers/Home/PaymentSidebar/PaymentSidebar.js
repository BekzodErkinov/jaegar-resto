// SCSS
import './PaymentSidebar.scss'

const PaymentSidebar = ({ changeSidebar, setChangeSidebar }) => {
  return (
    <div className="payment-sidebar">
      <h2>Payment</h2>
      <p>3 payment method available</p>

      <button
        className={`cancel-btn`}
        changeSidebar={changeSidebar === 'Orders Sidebar'}
        onClick={() => setChangeSidebar('Orders Sidebar')}
      >
        Cancel
      </button>
    </div>
  )
}

export default PaymentSidebar
