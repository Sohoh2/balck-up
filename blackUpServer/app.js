const express = require('express') //require == import 
const cors = require('cors')
const mysql = require('mysql')
const app = express() //app 실핼 express 
const port = 8080 //port number 
const connectInfo = require('./env');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: connectInfo.host,
    user: connectInfo.user,
    password: connectInfo.password,
    database: connectInfo.database,
})

app.use(cors())
//cors error 났을 때 설정


app.use(bodyParser.json())
//post body data 받을 때 설정




//app.get -> 주소를 요청할 때
//post -> get의 경로(데이터....)를 숨겨서 보내줌
//put ->  update(수정)처리할 때
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//req(request) 내가 요청한 내용
//res (response) 내가 응답받는 내용
app.get('/what', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

// API를 만든다.
app.get('/users', (req, res) => {
    console.log(req.query)
    const SQL = "SELECT * FROM user"
    connection.query(SQL, function (err, result, fields) {
        if (err) {
            console.log(err)
            res.send({
                status: 'SELECT FAIL'
            });

        }
        else {
            console.log(result)
            res.send(result)
        }

    })
})

app.get('/user', (req, res) => {
    console.log(req.query)
    const SQL = "SELECT * FROM user where id=?"
    connection.query(SQL, [req.query.id], function (err, result, fields) {
        if (err) {
            console.log(err)
            res.send({
                status: 'SELECT FAIL'
            });

        }
        else {
            console.log(result)
            res.send(result)
        }

    })
})

app.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    const SQL = "SELECT * FROM user where id=?"
    connection.query(SQL, [req.params.id], function (err, result, fields) {
        if (err) {
            console.log(err)
            res.send({
                status: 'SELECT FAIL'
            });

        }
        else {
            console.log(result)
            res.send(result)
        }

    })
})

app.post('/user', (req, res) => {
    console.log(req.body.name)
    console.log(req.body.age)
    const SQL = "INSERT into user(name, age) values(?,?)"
    connection.query(SQL, [req.body.name, req.body.age], function (err, result, fields) {
        if (err) {
            console.log(err)
            res.send({
                status: 'SELECT FAIL'
            });

        }
        else {
            console.log(result)
            res.send(result)
        }

    })
})


app.put('/user', (req, res) => {
    console.log(req.body.name)
    console.log(req.body.age)
    const SQL = "UPDATE user set name=?,age=? where id=?"
    connection.query(SQL, [req.body.name, req.body.age, req.body.id], function (err, result, fields) {
        if (err) {
            console.log(err)
            res.send({
                status: 'SELECT FAIL'
            });

        }
        else {
            console.log(result)
            res.send(result)
        }

    })
})

app.delete('/user', (req, res) => {
    console.log(req.query.name)
    console.log(req.query.age)
    const SQL = "DELETE from user where id=?"
    connection.query(SQL, [req.query.id], function (err, result, fields) {
        if (err) {
            console.log(err)
            res.send({
                status: 'SELECT FAIL'
            });

        }
        else {
            console.log(result)
            res.send(result)
        }

    })
})


app.post('/userDelete', (req, res) => {
    console.log(req.body.name)
    console.log(req.body.age)
    const SQL = "DELETE from user where id=?"
    connection.query(SQL, [req.body.id], function (err, result, fields) {
        if (err) {
            console.log(err)
            res.send({
                status: 'SELECT FAIL'
            });

        }
        else {
            console.log(result)
            res.send(result)
        }

    })
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})