import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();



const UserName = process.env.DB_USERNAME;
const PassWord = process.env.DB_PASSWORD;

const PORT = 8000;

Connection(UserName,PassWord);



app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('', router);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();

// app.get('/api/data', (req, res) => {
//     res.json({ message: 'Hello, world!' });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
