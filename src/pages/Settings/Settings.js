import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Containers
import {
  AboutUs,
  Security,
  Appearance,
  Notifications,
  YourRestaurant,
  ProductsManagement,
  SettingsSidebarMenu,
} from '../../containers/index'

// SCSS
import './Settings.scss'

const Settings = () => {
  const [activePage, setActivePage] = useState('Products Management')

  return (
    <Router>
      <div className="settings-page">
        <h1 className="title">Settings</h1>
        <main className="site-main">
          <SettingsSidebarMenu active={activePage} setActivePage={setActivePage} />

          <div className="menu-holder">
            <Switch>
              <Route exact path="/settings/appearance" component={Appearance} />
              <Route exact path="/settings/your-restaurant" component={YourRestaurant} />
              <Route exact path="/settings/products-management" component={ProductsManagement} />
              <Route exact path="/settings/notifications" component={Notifications} />
              <Route exact path="/settings/security" component={Security} />
              <Route exact path="/settings/about-us" component={AboutUs} />
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default Settings
