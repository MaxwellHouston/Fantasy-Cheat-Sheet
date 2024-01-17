import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import Players from '../components/Players/Players';
import Dashboard from '../components/Dashboard/Dashboard';
import Teams from '../components/Teams/Teams';
import Nav from '../components/Nav/Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);
