import React, { useState, useEffect } from 'react';
import '@fontsource/inter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import ResumeViewer from './ResumeViewer';
import Home from './Home';
import { Sidebar } from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
 const [sidebar, setSidebar] = useState(false);

 const handleSidebar = (sidebar) => {
    setSidebar(sidebar);
  }

  useEffect(() => {
    console.log(sidebar);
  }, [sidebar]);

  return (
    <>
    <ToastContainer/>
    <Router>
      <Sidebar onActivateSidebar={handleSidebar}/>
      <div className="main-container" 
      style={
        sidebar ?
        {marginLeft:"300px", transition:" margin-left .45s"} :
        {transition:" .35s"}
      }
      >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<FileUpload />} />
        <Route path="/Search" element={<ResumeViewer />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
