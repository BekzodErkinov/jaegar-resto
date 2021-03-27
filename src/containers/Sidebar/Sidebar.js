import { Link } from 'react-router-dom'

// Components
import SidebarBtn from '../../components/SidebarBtn/SidebarBtn'

import {
  HomeIcon,
  BrandLogo,
  MessageIcon,
  RegisterIcon,
  DiscountIcon,
  SettingsIcon,
  DashboardIcon,
  NotificationIcon
} from '../../assets/Icons/Icons'

// SCSS
import './Sidebar.scss'

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="sidebar">
      <div className="logo-holder">{<BrandLogo/>}</div>

      <Link to="/">
        <SidebarBtn
          icon={<HomeIcon/>}
          title="Home"
          active={activePage === 'home'}
          onClick={() => setActivePage('home')}
        />
      </Link>
      <Link to="/discount">
        <SidebarBtn
          icon={<DiscountIcon/>}
          title="Discount"
          active={activePage === 'discount'}
          onClick={() => setActivePage('discount')}
        />
      </Link>
      <Link to="/dashboard">
        <SidebarBtn
          icon={<DashboardIcon/>}
          title="Dashboard"
          active={activePage === 'dashboard'}
          onClick={() => setActivePage('dashboard')}
        />
      </Link>
      <Link to="/message">
        <SidebarBtn
          icon={<MessageIcon/>}
          title="Message"
          active={activePage === 'message'}
          onClick={() => setActivePage('message')}
        />
      </Link>
      <Link to="/notification">
        <SidebarBtn
          icon={<NotificationIcon/>}
          title="Notification"
          active={activePage === 'notification'}
          onClick={() => setActivePage('notification')}
        />
      </Link>
      <Link to="/settings/products-management">
        <SidebarBtn
          icon={<SettingsIcon/>}
          title="Settings"
          active={activePage === 'settings'}
          onClick={() => setActivePage('settings')}
        />
      </Link>
      <Link to="/register" className="register">
        <SidebarBtn
          icon={<RegisterIcon/>}
          title="Register"
          active={activePage === 'register'}
          onClick={() => setActivePage('register')}
        />
      </Link>
    </div>
  )
}

export default Sidebar
