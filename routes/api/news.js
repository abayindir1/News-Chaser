const express = require("express");
const router = express.Router();

var axios = require("axios");
var cheerio = require("cheerio");

// get Sky Sports news 
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

// get nbc news
router.get("/nbc", async (req, res) => {
  try {
    axios.get("https://www.nbcsports.com/soccer").then((response) => {
      var $ = cheerio.load(response.data);
      var newsArray =[]
      $(".more-headlines__list-item").each((i, element) => {
        var result = new Object();
        result.title = $(element).find(".story__title").children("a").text().trim();
        result.link = $(element).find(".story__title").children("a").attr("href");
        result.summary = $(element).find(".story__summary").text().trim();
        result.image = $(element).find(".story__image a img").attr("src")
        newsArray.push(result)
      });
      res.json(newsArray);

    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// get daily mail news
router.get("/dm", async (req, res) => {
  try {
    axios.get("https://www.dailymail.co.uk/sport/premierleague/index.html").then((response) => {
      var $ = cheerio.load(response.data);
      var newsArray =[]
      $(".article-small").each((i, element) => {
        var result = new Object();
        result.title = $(element).find(".linkro-darkred").text().trim();
        result.link = $(element).find("a").attr("href");
        result.summary = $(element).find("p").text().trim();
        result.image = $(element).find("a img").attr("src")
        result.date = $(element).find(".channel-date-container span").text().trim()
        newsArray.push(result)
      });
      res.json(newsArray);

    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// get talk sport news
router.get("/talk-sport", async (req, res) => {
  try {
    axios.get("https://talksport.com/football/premier-league/").then((response) => {
      var $ = cheerio.load(response.data);
      var newsArray =[]
      $(".rail__item").each((i, element) => {
        var result = new Object();
        result.headline = $(element).find(".rail__item-headline").text().trim();
        result.link = $(element).find("a").attr("href");
        result.summary = $(element).find(".rail__item-sub").text().trim();
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
