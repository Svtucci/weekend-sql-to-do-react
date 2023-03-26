const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET will pull from the weekend-to-do-app DB
router.get('/', (req, res) => {
    const queryDataBase = 'SELECT * FROM "taskList" ORDER BY "id" DESC;';
    pool.query(queryDataBase).then((result) => {
        // console.log(`Got stuff from DB`, result);
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
    const task = req.body;
    let queryTasks = `INSERT INTO "taskList" ("task", "description", "completionstatus")
                      VALUES ($1, $2, $3)`;
    pool.query(queryTasks, [task.task, task.description, task.completionstatus]).then ((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    })
});

// PUT will take updated info from DOM, send to DB to be udpated and then resent to DOM
// May need two put requests. 
// I know the taskUPDATE is the id, and the poolquery should be changed, but unsure of what is should be 

router.put('/:id', (req, res) => {
    console.log('PUT request made for /tasks', req.body);
    let taskUpdate = req.body
    const queryText = `UPDATE "taskList" SET "completionstatus" = $1 WHERE "id" = $2`; 
    pool.query(queryText, [true, taskUpdate.id]).then ((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500); 
    })
})



// DELETE will delete w/e id we choose 
router.delete('/:id', (req, res) => {
    console.log('DELETE Request made for /tasks');
    const deleteTask = `DELETE FROM "taskList" WHERE "id" = $1;`
    pool.query(deleteTask, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error making database query ${deleteTask}`, error);
        res.sendStatus(500);
    })
})



module.exports = router;
