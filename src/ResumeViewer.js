import React from 'react';
import { Sidebar } from './components/Sidebar';
import Search from './components/Search';
import './ResumeViewer.css';

export default function ResumeViewer() {
  return (
    <div className="main-container">
      <Search />
    </div>
  );
}
