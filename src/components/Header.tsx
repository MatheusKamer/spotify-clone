import { Link } from 'react-router-dom';
import logo from '../assets/logo/spotify-logo.png';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Logo spotify" />
      </Link>
      <Link to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};
export default Header;
