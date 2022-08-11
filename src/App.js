import React from 'react';
import '@fontsource/inter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import ResumeViewer from './ResumeViewer';
import Home from './Home';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<FileUpload />} />
        <Route path="/Search" element={<ResumeViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
