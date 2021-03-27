// Component
import DishCardBtn from '../../components/DishCardBtn/DishCardBtn'
// Data
import { dishesList } from '../../assets/data/data'

// SCSS
import './DishesList.scss'


const DishesList = () => {
  return (
    <div className="dishes-holder">
      <div className="choose-dish">
        <h1>Choose Dishes</h1>
        <select className="dishes-select" name="choose-dishes-select" id="choose-dishes-select">
          <option value="dine-in">Dine In</option>
          <option value="dine-in">Drinks</option>
          <option value="dine-in">Ice-cream</option>
        </select>
      </div>
      <div className="dishes-list">
        {dishesList.map(dish => (
          <DishCardBtn
            id={dish.id}
            key={dish.id}
            cost={dish.cost}
            title={dish.title}
            foodImg={dish.img}
            available={dish.available}
          />
          ))}
      </div>
    </div>
  )
}

export default DishesList
