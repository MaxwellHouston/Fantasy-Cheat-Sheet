import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import Players from '../components/Players/Players';
import Dashboard from '../components/Dashboard/Dashboard';
import Teams from '../components/Teams/Teams';
import SignUp from '../components/Auth/SignUp/SignUp';
import Login from '../components/Auth/Login/Login';
import Layout from '../components/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
