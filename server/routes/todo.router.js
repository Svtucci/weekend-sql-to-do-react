const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET will pull from the weekend-to-do-app DB
router.get('/', (req, res) => {
    let queryDataBase = 'SELECT * FROM "taskList";';
    pool.query(queryDataBase).then((result) => {
        res.send(result.row);
    }).catch((error) => {
        console.log(`Error in GET ${error}`)
        res.sendStatus(500);
    })
})

// POST will send info to DB 

// PUT will take updated info from DOM, send to DB to be udpated and then resent to DOM

// DELETE will delete w/e id we choose 

module.exports = router;
