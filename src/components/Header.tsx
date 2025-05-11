import logo from '../assets/logo/spotify-logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo spotify" />
      <a href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};
export default Header;
