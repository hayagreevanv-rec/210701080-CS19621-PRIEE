const express = require('express');
const db = require('../config/dbConn');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("InPatients Route");
});

router.post('/add',async(req,res)=>{
    const data = req.body;
    await db.query('INSERT INTO INPATIENTS(PATIENT_ID, ROOM_ID, ADMISSION_DATE, ADMISSION_REASON, PRIMARY_DOCTOR_ID, DISCHARGE_DATE) VALUES ($1,$2,$3,$4,$5,$6)',[data.patient_id, data.room_id, data.admission_date, data.admission_reason, data.doctor_id, data.discharge_date]);
    await db.query('UPDATE ROOMS SET CURR_AVBL_OCC_CAPACITY = CURR_AVBL_OCC_CAPACITY -1 WHERE ROOM_ID = $1',[data.room_id]);
    res.status(201).send("InPatient Added");
});

router.get('/current',async(req,res)=>{
    const result = await db.query('SELECT * FROM INPATIENTS WHERE DISCHARGE_DATE >= $1 OR DISCHARGE_DATE IS NULL',[new Date()]);
    res.status(200).send(result.rows);
})

router.get('/:id',async(req,res)=>{
    const result = await db.query('SELECT * FROM INPATIENTS WHERE ADMISSION_ID= $1',[req.params.id]);
    res.status(200).send(result.rows[0]);
})

router.post('/edit/:id',async(req,res)=>{
    const result = await db.query('UPDATE INPATIENTS SET PATIENT_ID = $1, ROOM_ID = $2, ADMISSION_DATE = $3, ADMISSION_REASON = $4, PRIMARY_DOCTOR_ID = $5, DISCHARGE_DATE =$6 WHERE ADMISSION_ID = $7',[data.patient_id, data.room_id, data.admission_date, data.admission_reason, data.doctor_id, data.discharge_date, req.params.id]);
    res.status(200).send(result.rows[0]);
})

module.exports = router;