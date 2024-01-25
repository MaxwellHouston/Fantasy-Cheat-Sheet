import './Nav.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { logOut } from '../../lib/API/auth';

const Nav = () => {
  const [cookies] = useCookies(['user']);

  const handleLogOut = async () => {
    const data = await logOut();
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/players">Players</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/login">Log In</Link>
      {cookies.user && <button onClick={handleLogOut}>Log Out</button>}
    </nav>
  );
};

export default Nav;
