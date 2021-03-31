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

router.post('/', rejectUnauthenticated, (req, res) => {
  const firstQuery = `
    INSERT INTO "post" ("title", "description", "date", "tag", "slug", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id";
  `;
  const secondQuery = `
    INSERT INTO "photo" ("file_url", "post_id")
    VALUES ($1, $2)
  `;
  pool.query(firstQuery, [req.body.title, req.body.description, req.body.date, req.body.tag, req.body.slug, req.user.id])
    .then((result) => {
      let newId = result.rows[0].id;
      // Add photo to photo table and tie it to a post
      pool.query(secondQuery, [req.body.fileUrl, newId])
      .then((result) => {
        res.sendStatus(201);
      })
    })
    .catch(err => {
      console.error(`POST /post failed`, err);
      res.sendStatus(500);
    });
});

module.exports = router;