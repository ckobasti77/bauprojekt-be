require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const corsOptions = require("./config/corsOptions");
const Zahtev = require("./models/zahtevModel");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.get("/zahtevi", async (req, res) => {
  try {
    const zahtevi = await Zahtev.find({});
    res.status(200).json(zahtevi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/zahtevi/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const zahtev = await Zahtev.findById(id);
    res.status(200).json(zahtev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/zahtevi", async (req, res) => {
  try {
    const zahtev = await Zahtev.create(req.body);

    res.status(200).json(zahtev)

    let config = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    };

    let transporter = nodemailer.createTransport(config);

    let message = {
      from: process.env.EMAIL,
      to: "jocikam738@gmail.com",
      subject: "Novi Zahtev",
      html: `
      <div style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
        <div>
          <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtevi:</span>
          <div style="margin-left: 1rem;">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 1:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[0].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[0].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[0].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
          <div style="margin-left: 1rem; display:${req.body.parcele[1] ? 'block' : 'none'}">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 2:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[1] && req.body.parcele[1].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[1] && req.body.parcele[1].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[1] && req.body.parcele[1].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
          <div style="margin-left: 1rem; display:${req.body.parcele[2] ? 'block' : 'none'}">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 3:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[2] && req.body.parcele[2].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[2] && req.body.parcele[2].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[2] && req.body.parcele[2].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
          <div style="margin-left: 1rem; display:${req.body.parcele[3] ? 'block' : 'none'}">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 4:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[3] && req.body.parcele[3].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[3] && req.body.parcele[3].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[3] && req.body.parcele[3].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
          <div style="margin-left: 1rem; display:${req.body.parcele[4] ? 'block' : 'none'}">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 5:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[4] && req.body.parcele[4].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[4] && req.body.parcele[4].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[4] && req.body.parcele[4].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
          <div style="margin-left: 1rem; display:${req.body.parcele[5] ? 'block' : 'none'}">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 6:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[5] && req.body.parcele[5].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[5] && req.body.parcele[5].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[5] && req.body.parcele[5].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
          <div style="margin-left: 1rem; display:${req.body.parcele[6] ? 'block' : 'none'}">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 7:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[6] && req.body.parcele[6].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[6] && req.body.parcele[6].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[6] && req.body.parcele[6].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
          <div style="margin-left: 1rem; display:${req.body.parcele[7] ? 'block' : 'none'}">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 8:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[7] && req.body.parcele[7].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[7] && req.body.parcele[7].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[7] && req.body.parcele[7].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
          <div style="margin-left: 1rem; display:${req.body.parcele[8] ? 'block' : 'none'}">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 9:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[8] && req.body.parcele[8].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[8] && req.body.parcele[8].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[8] && req.body.parcele[8].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
          <div style="margin-left: 1rem; display:${req.body.parcele[9] ? 'block' : 'none'}">
              <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Zahtev 10:</span>
              <div style="margin-left: 1rem;">
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Broj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[9] && req.body.parcele[9].broj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Podbroj parcele:</span>
                      <span style="color: #252525;">${req.body.parcele[9] && req.body.parcele[9].podbroj}</span>
                  </div>
                  <div>
                      <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Katastarska opstina:</span>
                      <span style="color: #252525;">${req.body.parcele[9] && req.body.parcele[9].katastarskaOpstina}</span>
                  </div>
              </div>
          </div>
        </div>
        <hr>
        <div>
          <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Vrsta zahteva:</span>
          <span style="color: #252525; display: block;">${req.body.vrstaZahteva}</span>
        </div>
        <hr>
        <div>
          <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Ime i prezime:</span>
          <span style="color: #252525; display: block;">${req.body.ime} ${req.body.prezime}</span>
        </div>
        <hr>
        <div>
          <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Ulica i broj:</span>
          <span style="color: #252525; display: block;">${req.body.ulica} ${req.body.broj}</span>
        </div>
        <hr>
        <div>
          <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Mesto:</span>
          <span style="color: #252525; display: block;">${req.body.mesto}</span>
        </div>
        <hr>
        <div>
          <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Telefon:</span>
          <span style="color: #252525; display: block;">${req.body.telefon}</span>
        </div>
        <hr>
        <div>
          <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">E-mail:</span>
          <span style="color: #252525; display: block;">${req.body.email}</span>
        </div>
        <hr>
        <div>
          <span style="color:#4b5563; font-size: 1rem; font-weight: 400; line-height: 1.5rem;">Dostaviti putem:</span>
          <span style="color: #252525; display: block;">${req.body.dostavitiPutem}</span>
        </div>
    </div>
    `,
    };

    transporter
      .sendMail(message)
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.put("/zahtevi/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const zahtev = await Zahtev.findByIdAndUpdate(id, req.body);
    if (!zahtev) {
      return res
        .status(404)
        .json({ message: `Cannot find any product with ID ${id}` });
    }
    const updatedZahtev = await Zahtev.findById(id);
    res.status(200).json(updatedZahtev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/zahtevi/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const zahtev = await Zahtev.findByIdAndDelete(id);
    if (!zahtev) {
      return res
        .status(404)
        .json({ message: `Cannot find any zahtev with ID ${id}` });
    }
    res.status(200).json(zahtev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => console.log(`Node API app is running on port 3000`));
  })
  .catch((error) => {
    console.log(error);
  });
