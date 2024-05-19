const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();


const router = express.Router();
const db = require("../config/dbConn");

router.get('/',(req,res)=>{
    res.send("Auth Route");
});

router.post('/login',async(req,res)=>{
    // console.log(req.body);
    const result = await db.query('SELECT * from users where email = $1',[req.body.email]);
    if(result.rows.length==0){
        res.status(301).send("User not found");
    }
    const authentication = await bcrypt.compare(req.body.password,result.rows[0].password);
    if(authentication){
        const token = jwt.sign({email:req.body.email,user_id:result.rows[0].user_id,role: result.rows[0].role},process.env.ACCESS_TOKEN_SECRET);
        res.cookie('jwt',token);
        console.log(token);
        res.status(200).send({accessToken:token});
    }else{
        res.status(400).send("Invalid Password");
    }
});

router.post('/register',async(req,res)=>{
    // console.log(req.body);
    const result = await db.query('SELECT * from users where email = $1',[req.body.email]);
    if(result.rows.length==0){
        const hashedPwd = await bcrypt.hash(req.body.password,10);
        const query = await db.query("Insert into users(name,email,password,role) values($1,$2,$3,$4);",[req.body.name,req.body.email,hashedPwd,req.body.role]);
        console.log(query.rows);
        const token = jwt.sign({email:req.body.email},process.env.ACCESS_TOKEN_SECRET);
        console.log(token);
        // res.status(200).send(token);
        res.cookie('jwt',token);
        res.status(200).send({accessToken:token});
    }
    else{
        res.status(400).send("User Already exists!");
    }
});

router.post('/logout',async(req,res)=>{
    res.cookie('jwt','',{ maxAge: 1, httpOnly: true });
    res.status(200).send("Logged Out");
})


module.exports = router;