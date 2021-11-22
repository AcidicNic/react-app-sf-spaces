import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import App from './components/App';
import POPOSList from './components/POPOSList/POPOSList';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';
import About from './components/About/About';

ReactDOM.render(
  <Router basename="/react-app-sf-spaces">
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
