import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Card from "./components/Card";
import ResumesPage from "./components/ResumesPage";

type SiteLanguage = 'en' | 'pt-br';

function detectUserLanguage(): SiteLanguage {
  const userLanguage = (globalThis.navigator?.language || '').toLowerCase();
  return userLanguage.startsWith('pt') ? 'pt-br' : 'en';
}

function HomeByLanguage() {
  const language = detectUserLanguage();
  const targetRoute = language === 'pt-br' ? '/pt-br' : '/en';
  return <Navigate to={targetRoute} replace />;
}

function App() {
  return (
    <div className="App">
        <noscript>
            This site requires JavaScript to be enabled. Please enable JavaScript in your browser settings and try again.
        </noscript>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomeByLanguage />} />
            <Route path="/en" element={<Card lang="en" />} />
                <Route path="/pt-br" element={<Card lang="pt-br" />} />
                <Route path="/resumes" element={<ResumesPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
