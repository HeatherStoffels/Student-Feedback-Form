const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

//send to database
router.post("/", (req, res) => {
  const newFeedback = req.body;
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
        VALUES ($1, $2, $3, $4)`;
  pool
    .query(sqlText, [
      newFeedback.feeling,
      newFeedback.understanding,
      newFeedback.support,
      newFeedback.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
