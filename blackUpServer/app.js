const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./router/auth');
const productRouter = require('./router/product');
const orderRouter = require('./router/order');
const app = express()
const port = 8080
const { swaggerUi, specs } = require('./swagger');

app.use(cors({origin: true, credentials: true}));
app.use(express.json({
    limit : "50mb"
}));
app.use(express.urlencoded({
    limit:"50mb",
    extended: false
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Express!")
})

app.use('/auth', authRouter);
app.use('/prod', productRouter);
app.use('/order', orderRouter);
const options = {
  swaggerOptions: {
    authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} }
  },
  explorer: true
};
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, options));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
