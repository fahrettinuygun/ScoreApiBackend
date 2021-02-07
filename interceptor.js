const fs = require('fs');
const path = require('path');
const url = require('url');
const score = require('./services/score');
const express = require('express');
const router = express.Router();
const FAVICON = path.join(__dirname,'favicon.png');

router.use(async function(req,res,next){
    try {
        // tarayıcılar otomatik olarak icon requesti atıyor
        if(req.url == '/favicon.ico'){
            res.setHeader('Content-Type', 'image/x-icon');
            icon = fs.readFileSync(FAVICON);
            res.send(icon);
        }
        else{
            next();
        }
    } catch (error) {
        console.error('interceptor error: ', error);
        console.error('interceptor error, Request URL: ', req.url);
    }
})

// buraya bir login ve authentication eklenmeli
// zaman sorunu nedeniyle es geçtim

router.route('/score').get(async function(req,res){
    const queryObject = url.parse(req.url,true).query;
    console.log('Rewuest URL: ', req.url);
    console.log('Score Request: id: ' +queryObject.id
                +' , '+'name: ' + queryObject.name
                +' , '+'surname: ' + queryObject.surname
                +' , '+'phone: ' + queryObject.phone
                +' , '+'city: ' + queryObject.city
                +' , '+'income: ' + queryObject.income
                );
    let result = await score.get(queryObject.id,queryObject.name,queryObject.surname, queryObject.phone, queryObject.city, queryObject.income);
    console.log('Score Result: ', result);
    res.send(result);
})

module.exports = router;