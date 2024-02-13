const { Router } = require('express');
const spotifyController = require('../controllers/spotifyController.js');

const router = Router();

router.get('/search', spotifyController.searchArthist);

router.get('/artists/:id', spotifyController.getArtist);
router.get('/artists/:id/albums', spotifyController.getArtistAlbum);
router.get('/artists/:id/toptracks', spotifyController.getArtistTopTracks);
router.get('/artists/:id/relatedartists', spotifyController.getRelatedArtists);

router.get('/tracks/:id', spotifyController.getTrack);
router.get('/audiofeatures/:id', spotifyController.getAudioFeatures);
router.get('/audioanalysis/:id', spotifyController.getAudioAnalysis);

router.get('/lyrics', spotifyController.getLyrics);

module.exports = router;