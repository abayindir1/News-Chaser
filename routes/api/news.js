const express = require("express");
const router = express.Router();

var axios = require("axios");
var cheerio = require("cheerio");

router.get("/sky-sports", async (req, res) => {
  try {
    axios.get("https://www.skysports.com/premier-league-news").then((response) => {
      var $ = cheerio.load(response.data);
      var result = {};

      $(".news-list__item").each((i, element) => {
        result.title = $(element).find(".news-list__headline-link").text();
        // console.log(result)
    });

    console.log(result)
    res.json(result);

    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
