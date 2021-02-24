const { default: Axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const username = req.params.username;
  console.log(req.params.username);
  
  Axios({
    method: 'GET',
    url: 'https://www.instagram.com/angiemtrudeau/?__a=1',
  
  }).then(response => {
      console.log('got back data', response.data);
      res.send(response.data);
    }).catch(err => {
      console.error(err);
  
      res.sendStatus(500);
    });
  });

module.exports = router;