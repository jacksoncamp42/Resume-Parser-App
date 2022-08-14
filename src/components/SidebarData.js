import React from 'react';
import Upload from './sidebar-icons/UploadPic.png';
import Dashlogo from './sidebar-icons/dashboard.png';
import Resume from './sidebar-icons/Resumes.png';
import Signout from './sidebar-icons/SignOut.png';

export const SidebarData = [
  {
    title: 'Upload',
    path: '/Upload',
    icon: (
      <img
        src={Upload}
        alt="Dashboard"
        style={{ height: '50px', width: '50px' }}
      />
    ),
    cName: 'nav-text',
  },
  {
    title: 'Resumes',
    path: '/Search',
    icon: <img src={Resume} alt="Resume" />,
    cName: 'nav-text',
  },
];
