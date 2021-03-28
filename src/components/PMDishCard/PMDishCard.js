import { EditIcon } from '../../assets/Icons/Icons'

// SCSS
import './PMDishCard.scss'

const PMDishCard = ({ id, cost, title, dishImg, available }) => {
  return (
    <div className="pm-list__dish-card" id={id}>
      <div className="card-lead">
        <img className="dish-img" src={dishImg} alt={title} />
        <h4 className="card-title">{title}</h4>
        <h4 className="subtitle">
          <span className="cost">{cost}</span>
          <span className="symbol"></span>
          <span className="available">{available} Bowls</span>
        </h4>
      </div>
      <button className="edit-btn" type="button">{<EditIcon/>} Edit dish</button>
    </div>
  )
}

export default PMDishCard
