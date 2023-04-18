const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zahtevSchema = new Schema({
  ime: {
    type: String,
    required: true
  },
  prezime: {
    type: String,
    required: true
  },
  ulica: {
    type: String,
    required: true
  },
  broj: {
    type: String,
    required: true
  },
  mesto: {
    type: String,
    required: true
  },
  telefon: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  parcele: [{
    broj: {
        type: String,
        required: true,
    },
    podbroj: {
        type: String,
        required: true,
    },
    katastarskaOpstina: {
        type: String,
        required: true,
    },
  },
  {
    broj: {
        type: String,
    },
    podbroj: {
        type: String,
    },
    katastarskaOpstina: {
        type: String,
    },
  },
  {
    broj: {
        type: String,
    },
    podbroj: {
        type: String,
    },
    katastarskaOpstina: {
        type: String,
    },
  }
],
  vrstaZahteva: {
    type: String,
    required: true,
  },
  dostavitiPutem: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Zahtev', zahtevSchema);
