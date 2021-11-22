import './Title.css';
import logo from './logo.svg';

function Title() {
  return (
    <div className="Title">
      <img className="Logo" src={logo} />
      <h1>Pumpkin Finder</h1>
      <div className="Title-Subtitle"> (The best pumpkin patches in the Bay Area!)</div>
    </div>
  )
}

export default Title
