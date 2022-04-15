const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.status(200).json({"Status": "Working"}))
  .post('/bfhl', (req, res) => {
    console.log(req.body.data)
    let arra = req.body.data
    let num = [];
    let alphabet =[];
    // Change the user id as per user name and DOB
    let user_id = 'purva_wakode_22052001'
    let email=`purvawakode2229@gmail.com`
    let rollNo = `0827IT191089'   // Check whether the given array contains numeric elements or not
    let stat=false
    arra.forEach((ele) => {
        // Check if the number is even or odd
        if(typeof(ele)==="number"){
            console.log(`${ele} is number`)
            num.push(ele)
            stat=true
        } else {
            console.log(`${ele} is alphabet`)
            alphabet.push(ele)
            stat=true
        }
        

    })
    if(stat){
        res.status(200).json({
            "is_success": stat,
            "user_id": user_id,
            "email": email,
            "roll_number":rollNo,
            "numbers": num,
            "alphabets": alphabet
        })
    } else {
        res.status(200).json({
            "is_success": stat,
            "user_id": user_id
        })

    }      
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
