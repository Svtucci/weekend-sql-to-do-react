const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET will pull from the weekend-to-do-app DB
router.get('/', (req, res) => {
    const queryDataBase = 'SELECT * FROM "taskList";';
    pool.query(queryDataBase).then((result) => {
        console.log(`Got stuff from DB`, result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in GET ${queryDataBase}`, error)
        res.sendStatus(500);
    })
});

// POST will send info to DB 
router.post('/', (req, res) => {
    console.log('POST Request made for /tasks');
    console.log(req.body);
    let taskToAdd = req.body;
    let queryTasks = `INSERT INTO "taskList" ("task", "status")
                      VALUES ($1, $2)`;
    pool.query(queryTasks, [taskToAdd.name, taskToAdd.status]).then ((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    })
});

// PUT will take updated info from DOM, send to DB to be udpated and then resent to DOM

// DELETE will delete w/e id we choose 

module.exports = router;
