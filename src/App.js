import './App.css'
import { Outlet } from 'react-router-dom'

import Title from './Title'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Title />
      <Outlet />
      <Footer />
   </div>
  );
}

export default App;
