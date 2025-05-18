import { Offer } from "../models/offer.js";

async function getAllOffers(req, res, next) {
  try {
    const offers = await Offer.findAll();
    res.send(offers);
  } catch (err) {
    console.error("No offers: ", err);
  }
}

export { getAllOffers };
