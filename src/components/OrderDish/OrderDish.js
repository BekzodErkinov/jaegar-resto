import { useState } from 'react'

// Icons
import { TrashIcon } from '../../assets/Icons/Icons'

// SCSS
import './OrderDish.scss'

const OrderDish = ({ id, cost, title, foodImg, available }) => {
  const [orderCount, setOrderCount] = useState(1)

  return (
    <div className="order-dish" id={id} key={id}>
      <div className="dish-head">
        <img width="20" height="20" className="dish-img"
          src={foodImg} alt={title} />
        <div className="dish-caption">
          <h4 className="title">{title}</h4>
          <span className="cost">$ {cost}</span>
        </div>
        <input
          min="1"
          max={available}
          type="number"
          name="order_dish_count"
          value={orderCount}
          title="Dish Count"
          onChange={e => setOrderCount(e.target.value <= available && e.target.value)}
          className="count-input"
          required
        />
        <div className="total-price">${orderCount * cost}</div>
      </div>
      <div className="dish-foot">
        <input
          type="text"
          id={`order-note-input-${id}`}
          name={`order_note_input_${id}`}
          placeholder="Order Note..."
          className="order-note-input"
          required
        />
        <button className="delete-btn"type="reset">{<TrashIcon/>}</button>
      </div>
    </div>
  )
}

export default OrderDish
