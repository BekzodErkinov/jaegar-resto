import { Link } from 'react-router-dom'

// Components
import SettingsSidebarMenuBtn from '../../../components/SettingsSidebarMenuBtn/SettingsSidebarMenuBtn'
// Icons
import {
  InfoIcon,
  HeartIcon,
  DiscountIcon,
  SecurityIcon,
  RestaurantIcon,
  NotificationIcon
} from '../../../assets/Icons/Icons'

// SCSS
import './SettingsSidebarMenu.scss'

const SettingsSidebarMenu = ({ active, setActivePage }) => {
  return (
    <div className="settings__sidebar-menu">
      <Link to="/settings/appearance">
        <SettingsSidebarMenuBtn
          icon={<HeartIcon/>}
          title="Appearance"
          subtitle="Dark and Light mode, Font size"
          active={active === 'Appearance'}
          onClick={() => setActivePage('Appearance')}
        />
      </Link>
      <Link to="/settings/your-restaurant">
        <SettingsSidebarMenuBtn
          icon={<RestaurantIcon/>}
          title="Your Restaurant"
          subtitle="Statistics management"
          active={active === 'Your Restaurant'}
          onClick={() => setActivePage('Your Restaurant')}
        />
      </Link>
      <Link to="/settings/products-management">
        <SettingsSidebarMenuBtn
          icon={<DiscountIcon/>}
          title="Products Management"
          subtitle="Manage your products, pricing, etc"
          active={active === 'Products Management'}
          onClick={() => setActivePage('Products Management')}
        />
      </Link>
      <Link to="/settings/notifications">
        <SettingsSidebarMenuBtn
          icon={<NotificationIcon/>}
          title="Notifications"
          subtitle="Customize your notifications"
          active={active === 'Notifications'}
          onClick={() => setActivePage('Notifications')}
        />
      </Link>
      <Link to="/settings/security">
        <SettingsSidebarMenuBtn
          icon={<SecurityIcon/>}
          title="Security"
          subtitle="Configure Password, PIN, etc"
          active={active === 'Security'}
          onClick={() => setActivePage('Security')}
        />
      </Link>
      <Link to="/settings/about-us">
        <SettingsSidebarMenuBtn
          icon={<InfoIcon/>}
          title="About Us"
          subtitle="Find out more about Posly"
          active={active === 'About Us'}
          onClick={() => setActivePage('About Us')}
        />
      </Link>
    </div>
  )
}

export default SettingsSidebarMenu
