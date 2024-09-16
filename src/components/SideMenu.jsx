import { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={collapsed ? 'side-menu collapsed' : 'side-menu'}>
      <button className="toggle-btn" onClick={toggleMenu}>
        <i className={collapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'}></i>
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <i className={collapsed ? 'fas fa-home' : 'fas fa-home'}></i>
              {!collapsed && 'Home'}
            </Link>
          </li>
          <li>
            <Link to="/home/screen1">
              <i className={collapsed ? 'fas fa-info-circle' : 'fas fa-info-circle'}></i>
              {!collapsed && 'About'}
            </Link>
          </li>
          <li>
            <Link to="/home/screen2">
              <i className={collapsed ? 'fas fa-envelope' : 'fas fa-envelope'}></i>
              {!collapsed && 'Contact Us'}
            </Link>
          </li>
          <li>
            <Link to="/home/screen3">
              <i className={collapsed ? 'fas fa-comments' : 'fas fa-comments'}></i>
              {!collapsed && 'Feedback'}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
