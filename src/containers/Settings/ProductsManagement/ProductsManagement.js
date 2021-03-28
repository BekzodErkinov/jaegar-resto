import { useState } from 'react'

// Containers
import FoodMenu from '../../../containers/FoodMenu/FoodMenu'
import PMDishesList from '../PMDishesList/PMDishesList'
// Icons
import { OptionIcon } from '../../../assets/Icons/Icons'

// SCSS
import './ProductsManagement.scss'

const ProductsManagement = () => {
  const [activePage, setActivePage] = useState('Hot Dishes')

  return (
    <div className="products-management">
      <header className="products-management-lead">
        <h1 className="title">Products Management</h1>
        <button className="manage-btn">
          {<OptionIcon/>}
          <span>Manage Categories</span>
        </button>
      </header>

      <main className="products-management-main">
          <FoodMenu activePage={activePage} setActivePage={setActivePage} />
        <div className="container">
          <PMDishesList
            activePage={activePage.toLowerCase()}
          />
        </div>
      </main>
    </div>
  )
}

export default ProductsManagement
