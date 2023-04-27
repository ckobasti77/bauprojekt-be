const Zahtev = require("../models/zahtevModel");
const MongoClient = require("mongodb").MongoClient;
const nodemailer = require("nodemailer");
require("dotenv").config();

const handleNewZahtev = async (req, res) => {
  const objekat = req.body;
  if (
    !objekat.name ||
    !objekat.surname ||
    !objekat.street ||
    !objekat.streetNumber ||
    !objekat.location ||
    !objekat.phoneNumber ||
    !objekat.email ||
    !objekat.parcelNumber1 ||
    !objekat.parcelSumbnumber1 ||
    !objekat.cadastralMuncipality1 ||
    !objekat.requestType ||
    !objekat.locationInfo ||
    !objekat.requestStatus
  )
    return res.status(400).json({ message: "All fields filled are required." });
  try {
    const result = await Zahtev.create(objekat);

    console.log(result);
    res
      .status(201)
      .json({ success: `Novi zahtev broj ${result._id} kreiran!` });

    // const mailOptions = {
    //   from: "bauzahtev@gmail.com",
    //   to: "jocikam738@gmail.com",
    //   subject: "Novi objekat dodat u kolekciju",
    //   text: JSON.stringify(objekat),
    // };

    // await transporter.sendMail(mailOptions);
    // console.log("Mail poslat");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        message: "You should receive a mail.",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

module.exports = { handleNewZahtev };
