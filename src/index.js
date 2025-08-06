require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');

//import router
const router = require('./routes/router');
const userRouter = require('./routes/userRouter')
const todoRouter = require('./routes/todoRouter')

//import custom middleware
const {logger} = require('./middlewares/logger');

//inisiasi instance express dalam variabel app
const app = express();

//use middlewares
app.use(logger);
app.use(compression())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/api/user', userRouter)
app.use('/api/todo', todoRouter)

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
