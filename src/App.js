import logo from './logo.svg';
import './App.css';

import Title from './Title';
import PumpkinPatchList from './PumpkinPatchList';

function App() {
  return (
    <div className="App">
      <img src={logo} />
      <Title />

      <PumpkinPatchList />
    </div>
  );
}

export default App;
