import { createBrowserRouter } from 'react-router-dom';
import PageSearch from '../components/pages/PageSearch';
import PagePlaylist from '../components/pages/PagePlaylist';
import PageAlbum from '../components/pages/PageAlbum';
import PageArtist from '../components/pages/PageArtist';

export const Router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return (
        <PageSearch />
      )
    }
  },
  {
    path: "/playlist/:id",
    Component() {
      return (
        <PagePlaylist />
      )
    }
  },
  {
    path: "/album/:id",
    Component() {
      return (
        <PageAlbum />
      )
    }
  },
  {
    path: "/artist/:id",
    Component() {
      return (
        <PageArtist />
      )
    }
  }
]);

export default Router;