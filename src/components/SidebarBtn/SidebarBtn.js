// SCSS
import './SidebarBtn.scss'

const SidebarBtn = ({ icon, title, active, onClick }) => {
  return (
    <button
      title={title}
      className={`sidebar-btn-holder ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className={`sidebar-btn ${active ? 'active' : ''}`}>
        {icon}
      </span>
    </button>
  )
}

export default SidebarBtn
