import { useState } from 'react'

// Containers
import OrdersSidebar from '../../containers/Home/OrdersSidebar/OrdersSidebar'
import PaymentSidebar from '../../containers/Home/PaymentSidebar/PaymentSidebar'

// SCSS
import './RightSidebar.scss'

const RightSidebar = () => {
  const [changeSidebar, setChangeSidebar] = useState('Orders Sidebar')

  return (
    <div className="right-sidebar">
      {changeSidebar === 'Orders Sidebar' ? (
        <OrdersSidebar changeSidebar={changeSidebar} setChangeSidebar={setChangeSidebar} />
      ) : (null)}
      {changeSidebar === 'Payment Sidebar' ? (
        <PaymentSidebar changeSidebar={changeSidebar} setChangeSidebar={setChangeSidebar} />
      ) : (null)}
    </div>
  )
}

export default RightSidebar
