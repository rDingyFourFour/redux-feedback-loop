const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  pool.query('SELECT * FROM "feedback";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET', error);
    res.sendStatus(500);
  });
})

router.post('/', (req, res) => {
  const newFeedback = req.body.github_name;
  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                  VALUES ($1, $2, $3, $4)`;
  pool.query(sqlText, [newFeedback])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;