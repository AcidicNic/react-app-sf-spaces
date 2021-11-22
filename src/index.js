import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import POPOSList from './POPOSList';
import POPOSDetails from './POPOSDetails';
import About from './About';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
