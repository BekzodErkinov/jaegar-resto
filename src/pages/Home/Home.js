// Containers
import HomeHeader from '../../containers/Home/HomeHeader/HomeHeader'
import RightSidebar from '../../containers/RightSidebar/RightSidebar'
import HomeMain from '../../containers/Home/HomeMain/HomeMain'

// SCSS
import './Home.scss'

const HomePage = () => {
  return (
    <div className="home-page">
      <main className="home-main">
        <HomeHeader />
        <HomeMain />
      </main>
      <RightSidebar />
    </div>
  )
}

export default HomePage
