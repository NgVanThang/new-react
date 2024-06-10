import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <NavLink to="/">
        <button>home</button>
      </NavLink>
      <NavLink to="/following">
        <button>following</button>
      </NavLink>
    </footer>
  );
}

export default Footer;
