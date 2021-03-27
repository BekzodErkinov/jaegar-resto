import { useState } from 'react'

// Containers
import FoodMenu from '../../../containers/FoodMenu/FoodMenu'
// Icons
import { OptionIcon } from '../../../assets/Icons/Icons'

// SCSS
import './ProductsManagement.scss'

const ProductsManagement = () => {
  const [activePage, setActivePage] = useState('Hot Dishes')

  return (
    <div className="products-management">
      <div className="products-management-lead">
        <h1 className="title">Products Management</h1>
        <button className="manage-btn">
          {<OptionIcon/>}
          <span>Manage Categories</span>
        </button>
      </div>

      <FoodMenu active={activePage} setActivePage={setActivePage} />
    </div>
  )
}

export default ProductsManagement
