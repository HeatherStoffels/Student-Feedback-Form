const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    const newFeedback = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments, flagged, date) 
        VALUES ($1, $2, $3, $4, $5, $6)`;
    pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments, newFeedback.flagged, newFeedback.date])
      .then((result) => {
        //console.log(`Added food to the database`, newItem);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      })
  })
  


module.exports = router;