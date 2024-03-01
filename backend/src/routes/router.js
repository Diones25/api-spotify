const { Router } = require('express');
const spotifyController = require('../controllers/spotifyController.js');

const router = Router();

router.get('/user/:userId', spotifyController.getUser);
router.get('/user/albums/:id', spotifyController.getUserAlbums);
router.get('/user/playlist/:id', spotifyController.getUserPlaylist);

router.get('/search', spotifyController.search);;

router.get('/artists/:id', spotifyController.getArtist);
router.get('/artists/:id/albums', spotifyController.getArtistAlbum);

router.get('/tracks/:id', spotifyController.getTrack);
router.get('/playlist/:playlist_id', spotifyController.getPlaylist);
router.get('/album/:id', spotifyController.getAlbum);

router.get('/lyrics', spotifyController.getLyrics);

module.exports = router;