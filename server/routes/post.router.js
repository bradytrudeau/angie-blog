const express = require('express');
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const router = express.Router();

// post route communicates with createpostSaga
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('/post POST route');
  console.log(req.body);
  console.log('is authenticated?', req.isAuthenticated());
  console.log('user', req.user);

  const queryString = `
    INSERT INTO "post" ("title", "description", "date", "file_url", "tag", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6);
  `;
  pool.query(queryString, [req.body.title, req.body.description, req.body.date, req.body.fileUrl, req.body.tag, req.user.id])
    .then((results) => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.error(`POST /post failed`, err);
      res.sendStatus(500);
    });
});

module.exports = router;