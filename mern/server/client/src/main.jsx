import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Record from './components/Record';
import RecordList from './components/RecordList';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Adjust the paths here */}
          <Route index element={<RecordList />} /> 
          <Route path="create" element={<Record />} /> 
          <Route path="edit/:id" element={<Record />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
