const express = require('express');
const db = require('../config/dbConn');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Appointment Route");
});

router.get('/all',async(req,res)=>{
    const result = await db.query('SELECT * FROM OUTPATIENTS');
    res.status(200).send(result.rows);
});

router.get('/today',async(req,res)=>{
    const result = await db.query('SELECT * FROM OUTPATIENTS WHERE APPOINTMENT_DATE = $1',[new Date()]);
    res.status(200).send(result.rows);
});

router.post('/add', async(req, res)=>{
    const data = req.body;
    console.log(data);
	await db.query('INSERT INTO OUTPATIENTS(PATIENT_ID,APPOINTMENT_DATE, APPOINTMENT_TIME, APPOINTMENT_REASON, DOCTOR_ID, TEST_MSRMNT_DTL, PRESCRIPTION_DTL) VALUES($1,$2,$3,$4,$5,$6,$7)',[data.patient_id, data.appointment_date, data.appointment_time, data.appointment_reason, data.doctor_id, data.test_msrmnt_dtl, data.prescription_dtl]);
    res.status(201).send("Appointment Created!");
})

router.get('/getappointments', async(res, req)=>{
	
})

module.exports = router;