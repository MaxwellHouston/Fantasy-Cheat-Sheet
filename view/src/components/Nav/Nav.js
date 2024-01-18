import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/players">Players</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </nav>
  );
};

export default Nav;
