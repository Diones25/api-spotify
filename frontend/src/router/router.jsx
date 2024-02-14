import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import PageSearch from '../components/pages/PageSearch';
import PagePlaylist from '../components/pages/PagePlaylist';

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
        <PagePlaylist />
      )
    }
  }
]);

export default Router;