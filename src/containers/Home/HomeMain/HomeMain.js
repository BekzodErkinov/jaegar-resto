import { useState } from 'react'

// Containers
import FoodMenu from '../../FoodMenu/FoodMenu'
import DishesList from '../../DishesList/DishesList'

// SCSS
import './HomeMain.scss'

const HomeMain = () => {
  const [activePage, setActivePage] = useState('Hot Dishes')

  return (
    <div className="home__main">
      <FoodMenu activePage={activePage} setActivePage={setActivePage} />

      {activePage === 'Hot Dishes' && (<DishesList/>)}
      {activePage === 'Cold Dishes' && (<h2>Cold Dishes</h2>)}
      {activePage === 'Soup' && (<h2>Soup</h2>)}
      {activePage === 'Grill' && (<h2>Grill</h2>)}
      {activePage === 'Appetizer' && (<h2>Appetizer</h2>)}
      {activePage === 'Desert' && (<h2>Desert</h2>)}
    </div>
  )
}

export default HomeMain
