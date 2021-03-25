// Components
import FoodMenuBtn from '../../components/FoodMenuBtn/FoodMenuBtn'

// SCSS
import './FoodMenu.scss'

const Menu = ({ activePage, setActivePage }) => {
  return (
    <div className="container">
      <div className="food-menu">
        <FoodMenuBtn
          title="Hot Dishes"
          active={activePage === 'Hot Dishes'}
          setActivePage={() => setActivePage('Hot Dishes')}
        />
        <FoodMenuBtn
          title="Cold Dishes"
          active={activePage === 'Cold Dishes'}
          setActivePage={() => setActivePage('Cold Dishes')}
        />
        <FoodMenuBtn
          title="Soup"
          active={activePage === 'Soup'}
          setActivePage={() => setActivePage('Soup')}
        />
        <FoodMenuBtn
          title="Grill"
          active={activePage === 'Grill'}
          setActivePage={() => setActivePage('Grill')}
        />
        <FoodMenuBtn
          title="Appetizer"
          active={activePage === 'Appetizer'}
          setActivePage={() => setActivePage('Appetizer')}
        />
        <FoodMenuBtn
          title="Desert"
          active={activePage === 'Desert'}
          setActivePage={() => setActivePage('Desert')}
        />
      </div>
    </div>
  )
}

export default Menu
