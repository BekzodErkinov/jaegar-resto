// SCSS
import './DishCardBtn.scss'

const DishCardBtn = ({ id, foodImg, cost, title, available }) => {
  return (
    <button className="dish-card-btn" id={id}>
      <img height="132" width="132" className="food-img" src={foodImg} alt={title} />
      <h3 className="title">{title}</h3>
      <span className="cost">$ {cost}</span>
      <span className="available">{available} Bowls Available</span>
    </button>
  )
}

export default DishCardBtn
