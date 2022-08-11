import React from 'react';
import Dashlogo from './sidebar-icons/dashboard.png';
import Resume from './sidebar-icons/Resumes.png';
import Signout from './sidebar-icons/SignOut.png';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <img src={Dashlogo} alt="Dashboard" />,
    cName: 'nav-text',
  },
  {
    title: 'Resumes',
    path: '/Search',
    icon: <img src={Resume} alt="Resume" />,
    cName: 'nav-text',
  },
  {
    title: 'Sign Out',
    path: '/',
    icon: <img src={Signout} alt="Sign" />,
    cName: 'nav-text',
  },
];
