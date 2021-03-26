// Components
import OrderDish from '../../../components/OrderDish/OrderDish'
// Data
import { dishesList } from '../../../assets/data/data'

// SCSS
import './OrdersSidebar.scss'

const OrdersSidebar = ({ changeSidebar, setChangeSidebar }) => {
  return (
    <div className="orders-sidebar">
      <form id="orders-form" action="https://echo.htmlacademy.ru">
        {/* Orders Header */}
        <div className="orders-form-header">
          <h2 className="sidebar-title">Orders #34562</h2>
          <div className="service-type">
            <button className="service-type-btn active" type="button" active>Dine In</button>
            <button className="service-type-btn" type="button">To Go</button>
            <button className="service-type-btn" type="button">Delivery</button>
          </div>
        </div>
        {/* Orders Main */}
        <div className="orders-form-main">
          <div className="orders-list-caption">
            <h3 className="item">Item</h3>
            <h3 className="qty">Qty</h3>
            <h3 className="price">Price</h3>
          </div>
          <div className="orders-list">
            {dishesList.map(dish => (
              <OrderDish
                id={dish.id}
                key={dish.id}
                cost={dish.cost}
                title={dish.title}
                foodImg={dish.img}
                available={dish.available}
              />
            ))}
          </div>
          <div className="orders-footer">
            <div className="discount">
              <h4>Discount</h4>
              <span>$0</span>
            </div>
            <div className="sub-total">
              <h4>Sub total</h4>
              <span>$ 21.03</span>
            </div>
          </div>
        </div>
        {/* Orders Footer */}
        <div className="orders-form-footer">
          <button
            type="submit"
            className={`payment-btn`}
            changeSidebar={changeSidebar === 'Payment Sidebar'}
            onClick={() => setChangeSidebar('Payment Sidebar')}
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrdersSidebar
