import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import PageSearch from '../components/pages/PageSearch';
import PagePlaylist from '../components/pages/PagePlaylist';
import PageAlbum from '../components/pages/PageAlbum';
import PageArtist from '../components/pages/PageArtist';

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
  },
  {
    path: "/album",
    Component() {
      return (
        <PageAlbum />
      )
    }
  },
  {
    path: "/artist",
    Component() {
      return (
        <PageArtist />
      )
    }
  }
]);

export default Router;