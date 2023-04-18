const express = require('express');
const router = express.Router();
const Zahtev = require('../model/Zahtev');
const zahtevController = require('../controllers/zahtevController')

router.post('/zahtevi', zahtevController.handleNewZahtev);

module.exports = router;
