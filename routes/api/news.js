const express = require("express");
const router = express.Router();

var axios = require("axios");
var cheerio = require("cheerio");

router.get("/sky-sports", async (req, res) => {
  try {
    axios.get("https://www.skysports.com/premier-league-news").then((response) => {
      var $ = cheerio.load(response.data);
      var newsArray =[]
      $(".news-list__item").each((i, element) => {
        var result = new Object();
        result.title = $(element).find(".news-list__headline-link").text().trim();
        result.link = $(element).find(".news-list__headline-link").attr("href")
        result.summary = $(element).find(".news-list__snippet").text().trim();
        result.date = $(element).find(".label__timestamp").text().trim();
        result.image = $(element).find(".news-list__image").attr("data-src");
        newsArray.push(result)
      });
      res.json(newsArray);

    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
