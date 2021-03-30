const express = require('express');
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const router = express.Router();

// GET route to return the recipes
router.get('/', (req, res) => {
  console.log('/recipe GET route');
  const queryText = `SELECT * FROM "post" WHERE "tag" = $1 ORDER BY "id" ASC;`; 
  const queryParams = ["recipe"];
  pool.query(queryText, queryParams)
    .then((result) => {
    res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;