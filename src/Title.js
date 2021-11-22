import './Title.css';
import logo from './logo.svg';

function Title() {
  return (
    <div className="Title">
      <img className="Logo" src={logo} />
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle"> San Franciscos Privately Owned Public Spaces</div>
    </div>
  )
}

export default Title
