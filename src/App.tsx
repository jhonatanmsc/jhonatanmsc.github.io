import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Card from "./components/Card";
import ResumesPage from "./components/ResumesPage";

function App() {
  return (
    <div className="App">
        <noscript>
            This site requires JavaScript to be enabled. Please enable JavaScript in your browser settings and try again.
        </noscript>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Card lang="en" />} />
                <Route path="/pt-br" element={<Card lang="pt-br" />} />
                <Route path="/resumes" element={<ResumesPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
