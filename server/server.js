import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB.js';
import userRoutes from './router/userRouter.js';
dotenv.config({ path: './config.env' });
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
//routes
app.get('/', (req, res) => {
  res.send('Hello from the server side!');
});

app.use('/api/v1/users', userRoutes);
const PORT = process.env.PORT || 8800;
app.listen(
  PORT,
  connectDB(),
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
      .underline
  )
);
