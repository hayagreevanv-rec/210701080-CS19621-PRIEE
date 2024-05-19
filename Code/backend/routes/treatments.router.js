const express = require('express');
const db = require('../config/dbConn');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Treatments Route");
});

router.get('/all',async(req,res)=>{
    const result = await db.query("SELECT * FROM TREATMENTS ORDER BY TREATMENT_ID");
    res.status(200).send(result.rows);
});

router.get('/today',async(req,res)=>{
    const result = await db.query("SELECT * FROM TREATMENTS WHERE TREATMENT_DATE = $1 ORDER BY TREATMENT_ID",[new Date()]);
    res.status(200).send(result.rows);
});

router.post('/add',async(req,res)=>{
    const data = req.body;
    await db.query("INSERT INTO TREATMENTS(PATIENT_ID, DOCTOR_ID, ADMISSION_ID, TREATMENT_DATE, CARE_TAKER_DTL, TEST_MSRMNT_DTL, PRESCRIPTION_DTL) VALUES($1,$2,$3,$4,$5,$6,$7)",[data.patient_id, data.doctor_id, data.admission_id, data.treatment_date, data.care_taker_dtl, data.test_msrmnt_dtl, data.prescription_dtl]);
    res.status(201).send("Treatment Added!");
})



module.exports = router;