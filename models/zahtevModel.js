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
        type: Number,
        required: true,
    },
    podbroj: {
        type: Number,
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
        required: false
    },
    podbroj: {
        type: String,
        required: false
    },
    katastarskaOpstina: {
        type: String,
        required: false
    },
  },
  {
    broj: {
        type: String,
        required: false
    },
    podbroj: {
        type: String,
        required: false
    },
    katastarskaOpstina: {
        type: String,
        required: false
    },
  },
  {
    broj: {
        type: String,
        required: false
    },
    podbroj: {
        type: String,
        required: false
    },
    katastarskaOpstina: {
        type: String,
        required: false
    },
  },
  {
    broj: {
        type: String,
        required: false
    },
    podbroj: {
        type: String,
        required: false
    },
    katastarskaOpstina: {
        type: String,
        required: false
    },
  },
  {
    broj: {
        type: String,
        required: false
    },
    podbroj: {
        type: String,
        required: false
    },
    katastarskaOpstina: {
        type: String,
        required: false
    },
  },
  {
    broj: {
        type: String,
        required: false
    },
    podbroj: {
        type: String,
        required: false
    },
    katastarskaOpstina: {
        type: String,
        required: false
    },
  },
  {
    broj: {
        type: String,
        required: false
    },
    podbroj: {
        type: String,
        required: false
    },
    katastarskaOpstina: {
        type: String,
        required: false
    },
  },
  {
    broj: {
        type: String,
        required: false
    },
    podbroj: {
        type: String,
        required: false
    },
    katastarskaOpstina: {
        type: String,
        required: false
    },
  },
  {
    broj: {
        type: String,
        required: false
    },
    podbroj: {
        type: String,
        required: false
    },
    katastarskaOpstina: {
        type: String,
        required: false
    },
  },
],
  vrstaZahteva: {
    type: String,
    required: true,
  },
  dostavitiPutem: {
    type: String,
    required: true,
  },
  statusZahteva: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

const Zahtev = mongoose.model('Zahtev', zahtevSchema);

module.exports = Zahtev;
