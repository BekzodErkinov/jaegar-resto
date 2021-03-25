import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Sidebar from './containers/Sidebar/Sidebar'

import {
  Home,
  Message,
  Register,
  Discount,
  Settings,
  Dashboard,
  Notification,
} from './pages/index'

function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <Router>
      <div className="app">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <main className="site-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/message" component={Message} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/discount" component={Discount} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/notification" component={Notification} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
