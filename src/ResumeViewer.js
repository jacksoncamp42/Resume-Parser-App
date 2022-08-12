import React from 'react';
import { Sidebar } from './components/Sidebar';
import Search from './components/Search';
import ResumeContainer from './components/ResumeContainer';
import './ResumeViewer.css';
 
export default function ResumeViewer() {
  return (
      <>
      <Search />
      <ResumeContainer/>
      </>
  );
}
