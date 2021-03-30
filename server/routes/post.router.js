const express = require('express');
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const router = express.Router();

// GET route to return the users posts
router.get('/', (req, res) => {
  console.log('/post GET route');
  const queryText = `SELECT * FROM "post" WHERE "user_id" = $1 ORDER BY "id" ASC;`; 
  const queryParams = [1];
  pool.query(queryText, queryParams)
    .then((result) => {
    res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

// GET route to return the users posts
router.get('/:slug', (req, res) => {
  console.log('/post GET route');
  const queryText = `SELECT * FROM "post" WHERE "slug" = $1;`; 
  const queryParams = [req.params.slug];
  console.log('REQ', req.params);
  
  pool.query(queryText, queryParams)
    .then((result) => {
    res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

// post route communicates with createpostSaga
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('/post POST route');
  console.log(req.body);
  console.log('is authenticated?', req.isAuthenticated());
  console.log('user', req.user);

  const queryString = `
    INSERT INTO "post" ("title", "description", "date", "file_url", "tag", "slug", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7);
  `;
  pool.query(queryString, [req.body.title, req.body.description, req.body.date, req.body.fileUrl, req.body.tag, req.body.slug, req.user.id])
    .then((results) => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.error(`POST /post failed`, err);
      res.sendStatus(500);
    });
});

module.exports = router;