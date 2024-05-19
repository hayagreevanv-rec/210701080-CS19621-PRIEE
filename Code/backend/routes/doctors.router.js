const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const db = require('../config/dbConn');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Doctors Route");
});

router.get('/all',async(req,res)=>{
    const data = await db.query("SELECT DOCTOR_ID,NAME, EMAIL,DOB, SPECIALIZATION, YEARS_EXPR, GENDER, ON_DUTY, EMP_IND FROM DOCTORS WHERE ON_DUTY = $1",['Y']);
    res.status(200).send(data.rows);
});

router.get('/getData/:id', async (req, res) => {
    const id = req.params.id;
    
    // Simple validation for ID (assuming it's a number)
    if (isNaN(id)) {
        return res.status(400).send({ error: 'Invalid ID format' });
    }

    try {
        console.log(`Fetching data for doctor ID: ${id}`);
        const result = await db.query('SELECT * FROM DOCTORS WHERE DOCTOR_ID = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).send({ error: 'Doctor not found' });
        }
        console.log(result.rows[0].name)
        res.status(200).send(result.rows[0]);
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send({ error: 'An error occurred while fetching data' });
    }
});

router.put('/update', async (req, res) => {
    try {
        const { name, email, specialization, dob, years_expr, address, gender, on_duty, emp_ind, doctor_id } = req.body;
        console.log('Received data for update:', req.body);

        const result = await db.query(
            'UPDATE doctors SET name = $1, email = $2, specialization = $3, dob = $4, years_expr = $5, address = $6, gender = $7, on_duty = $8, emp_ind = $9 WHERE doctor_id = $10',
            [name, email, specialization, dob, years_expr, address, gender, on_duty, emp_ind, doctor_id]
        );

        console.log(result)

        res.status(200).json({ message: 'Doctor updated successfully', result: result });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to update doctor' });
    }
});

router.post('/register',async(req,res)=>{

    const result = await db.query('SELECT * from doctors where email = $1',[req.body.email]);
    if(result.rows.length==0){
        const doctorQuery = await db.query("insert into doctors(name,email,specialization,dob,years_expr,address,gender,on_duty, emp_ind) values($1,$2,$3,$4,$5,$6,$7,$8,$9);",[req.body.doctorname,req.body.email,req.body.specialization,req.body.dob, req.body.years_expr, req.body.address, req.body.gender, req.body.on_duty, req.body.emp_ind]);
        res.sendStatus(200)
    }
    else{
        res.sendStatus(400).send("Doctor Already exists!");
    }
});

router.get('/on-duty',async(req,res)=>{
    const data = await db.query('SELECT USER_ID,NAME, SPECIALIZATION, YEARS_EXPR, GENDER, ON_DUTY FROM DOCTORS WHERE ON_DUTY=$1 AND EMP_IND=$2',['Y','Y']);
    res.status(200).send(data.rows);
});



module.exports = router;