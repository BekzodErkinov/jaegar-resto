// Data
import { dishesList } from '../../../assets/data/data'
// Components
import PMDishCard from '../../../components/PMDishCard/PMDishCard'
import AddNewDishBtn from '../../../components/AddNewDish/AddNewDishBtn'

// SCSS
import './PMDishesList.scss'

const PMDishesList = ({ activePage }) => {
  return (
    <div className="product-management__dishes-list">
      <div className="dishes-list">
        <AddNewDishBtn />
        {dishesList.map(dish => (
          dish.type.includes(activePage) &&
          <PMDishCard
            id={dish.id}
            cost={dish.cost}
            title={dish.title}
            dishImg={dish.img}
            available={dish.available}
          />
        ))}
      </div>
      <div className="buttons">
        <button className="discard" type="button">Discard Changes</button>
        <button className="save" type="button">Save Changes</button>
      </div>
    </div>
  )
}

export default PMDishesList
