import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './db/dbconnection.js';

dotenv.config({
  path: './.env',
});

const port = process.env.PORT || 3000;

//Database Connection
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error', error);
    process.exit(1);
  });
