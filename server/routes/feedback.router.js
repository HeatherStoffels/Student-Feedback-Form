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
//get all items
router.get('/', (req, res) => {
    console.log('request received in get');
    // const feedback = req.params.id;
    const sqlText = `SELECT * FROM feedback`;
    pool.query(sqlText)
      .then((result) => {
        console.log(`in server get`, result.rows);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); 
      })
  })
  //get spec byn id

module.exports = router;
