const Zahtev = require("../models/zahtevModel");

const handleNewZahtev = async (req, res) => {
  const {
    name,
    surname,
    street,
    streetNumber,
    location,
    phoneNumber,
    email,
    parcelNumber1,
    parcelSumbnumber1,
    cadastralMuncipality1,
    parcelNumber2,
    parcelSumbnumber2,
    cadastralMuncipality2,
    parcelNumber3,
    parcelSumbnumber3,
    cadastralMuncipality3,
    requestType,
    locationInfo,
  } = req.body;
  if (
    !name ||
    !surname ||
    !street ||
    !streetNumber ||
    !location ||
    !phoneNumber ||
    !email ||
    !parcelNumber1 ||
    !parcelSumbnumber1 ||
    !cadastralMuncipality1 ||
    !requestType ||
    !locationInfo
  )
    return res.status(400).json({ message: "All fields filled are required." });
  try {
    const result = await Zahtev.create({
      ime: name,
      prezime: surname,
      ulica: street,
      broj: streetNumber,
      mesto: location,
      telefon: phoneNumber,
      email: email,
      parcele: [
        {
          broj: parcelNumber1,
          podbroj: parcelSumbnumber1,
          katastarskaOpstina: cadastralMuncipality1,
        },
        {
          broj: parcelNumber2,
          podbroj: parcelSumbnumber2,
          katastarskaOpstina: cadastralMuncipality2,
        },
        {
          broj: parcelNumber3,
          podbroj: parcelSumbnumber3,
          katastarskaOpstina: cadastralMuncipality3,
        },
      ],
      vrstaZahteva: requestType,
      dostavitiPutem: locationInfo,
    });

    console.log(result);
    res.status(201).json({ success: `Novi zahtev broj ${result._id} kreiran!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewZahtev };
