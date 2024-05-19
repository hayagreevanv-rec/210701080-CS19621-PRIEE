const express = require('express');
const db = require('../config/dbConn');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Rooms Route");
});

router.get('/details',async(req,res)=>{
    const result = await db.query("SELECT * FROM ROOMS WHERE AVAILABILItY ='Y' ORDER BY ROOM_ID");
    res.status(200).send(result.rows);
});

router.get('/summary',async(req,res)=>{
    const result = await db.query("SELECT SUM(curr_avbl_occ_capacity) AS CURR_AVBL, SUM(total_occ_capacity) AS TOTAL FROM ROOMS WHERE AVAILABILITY = $1",['Y']);
    res.status(200).send(result.rows[0]);
});

router.post('/setroom', async(res, req)=>{
	
})

router.get('/getrooms', async(res, req)=>{
	
})

module.exports = router;