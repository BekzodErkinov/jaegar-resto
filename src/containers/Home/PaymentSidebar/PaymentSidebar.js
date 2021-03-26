// Icons
import { CreditCardIcon, PayPalCardIcon, CashCardIcon } from '../../../assets/Icons/Icons'

// SCSS
import './PaymentSidebar.scss'

const PaymentSidebar = ({ changeSidebar, setChangeSidebar }) => {
  return (
    <div className="payment-sidebar">
      <form action="https://echo.htmlacademy.ru" method="POST" id="payment-form">
          {/* Payment Header */}
        <div className="payment-head">
          <h2 className="title">Payment</h2>
          <p className="subtitle">3 payment method available</p>
        </div>
        {/* Payment Main */}
        <div className="payment-main">
          <h3 className="form-title">Payment Method</h3>
          <div className="payment-method">
            <label
              htmlFor="payment-credit-card"
              className="payment-card-label" >
              {<CreditCardIcon />}
              <h4>Credit Card</h4>
              <input type="radio" name="card" id="payment-credit-card" checked required />
            </label>
            <label
              htmlFor="payment-paypal"
              className="payment-card-label paypal" >
              {<PayPalCardIcon/>}
              <h4>PayPal</h4>
              <input type="radio" name="card" id="payment-paypal" required />
            </label>
            <label
              htmlFor="payment-cash"
              className="payment-card-label cash" >
              {<CashCardIcon/>}
              <h4>Cash</h4>
              <input type="radio" name="card" id="payment-cash" required />
            </label>
          </div>
          <label
            htmlFor="cardholder-name"
            className="payment-label cardholder-name" >
            <span>Cardholder Name</span>
            <input type="text" name="cardholder_name" id="cardholder-name" placeholder="John Doe" required />
          </label>
          <label
            htmlFor="card-number"
            className="payment-label card-number" >
            <span>Card Number</span>
            <input type="number" name="card_number" id="card-number" min="16" max="16" placeholder="1234 5678 9012 3456" required />
          </label>
          <div className="card-foot">
            <label
              htmlFor="card-expiration-date"
              className="payment-label card-date" >
              <h4>Expiration Date</h4>
              <input type="text" name="card_expiration_date" id="card-expiration-date" min="25-03-2021" placeholder="02/2022" required />
            </label>
            <label
              htmlFor="card-cvv"
              className="payment-label card-cvv" >
              <h4>CVV</h4>
              <input type="password" name="card_cvv" id="card-cvv" minLength="3" maxLength="16" placeholder="● ● ●" required />
            </label>
          </div>
        </div>
        {/* Payment Footer */}
        <div className="payment-foot">
          <div className="additional-input">
            <label
              htmlFor="order-type"
              className="payment-label order-type" >
              <h4>Order Type</h4>
              <select name="payment_order_type" id="order-type">
                <option value="dine-in">Dine In</option>
                <option value="drink">Drink</option>
                <option value="ice-cream">Ice cream</option>
              </select>
            </label>
            <label
              htmlFor="table-no"
              className="payment-label table-no" >
              <h4>Table no.</h4>
              <input type="number" name="card_table_no" id="table-no" required />
            </label>
          </div>
          <div className="buttons">
            <button
              className={`cancel-btn`}
              changeSidebar={changeSidebar === 'Orders Sidebar'}
              onClick={() => setChangeSidebar('Orders Sidebar')}
              >
              Cancel
            </button>
            <button className="form-submit-btn" type="submit">Confirm Payment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PaymentSidebar
