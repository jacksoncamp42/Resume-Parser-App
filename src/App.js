import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import ResumeViewer from './ResumeViewer';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<FileUpload />} />
        <Route path="/Search" element={<ResumeViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
