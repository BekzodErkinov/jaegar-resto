// SCSS
import './SettingsSidebarMenuBtn.scss'

const SettingsSidebarMenuBtn = ({ icon, title, subtitle, active, onClick }) => {
  return (
    <button
      className={`settings__sidebar-menu-btn ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {icon}
      <div className="lead">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
    </button>
  )
}

export default SettingsSidebarMenuBtn
