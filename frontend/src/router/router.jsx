import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import PageSearch from '../components/pages/PageSearch';

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
  }
]);

export default Router;