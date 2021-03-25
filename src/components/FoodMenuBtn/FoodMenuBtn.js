// SCSS
import './FoodMenuBtn.scss'

const FoodMenuBtn = ({ title, active, setActivePage }) => {
  return (
    <button
      className={`food-menu-btn ${active ? 'active' : ''}`}
      onClick={() => setActivePage(title)}
    >
      {title}
    </button>
  )
}

export default FoodMenuBtn
