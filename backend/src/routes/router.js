const { Router } = require('express');
const spotifyController = require('../controllers/spotifyController.js');

const router = Router();

router.get('/', spotifyController.home);
router.get('/search', spotifyController.search);
router.get('/lyrics', spotifyController.getLyrics);

module.exports = router;