import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import PageSearch from '../components/pages/PageSearch';
import PageDetails from '../components/pages/PageDetails';

export const Router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return (
        <Home />
      )
    }
  },
  {
    path: "/search",
    Component() {
      return (
        <PageSearch />
      )
    }
  },
  {
    path: "/playlist",
    Component() {
      return (
        <PageDetails />
      )
    }
  }
]);

export default Router;