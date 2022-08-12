import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import Logographic from './sidebar-icons/Logo-graphic.png';

export function Sidebar({onActivateSidebar}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  useEffect(() => {
    onActivateSidebar(sidebar)
  }, [sidebar]);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      {sidebar ? null : <div className="navbar">
          <Link to="#" className="menu-bars">
            <img src={Logographic} alt="logo" onClick={showSidebar} />
          </Link>
          <h2 className="navbar-header"> Resume Parser </h2>
        </div>
        }
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <img src={Logographic} alt="logo" />
              </Link>
              <h2 className="navbar-header"> Resume Parser </h2>

            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
