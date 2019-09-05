import express from 'express';
import auth from './routes/auth';
import users from './routes/users';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/auth", auth);
app.use("/api/users", users);
app.get("/", (req, res) => {
    res.send('work');
});

app.listen(8081, () => console.log('server running on 8081') );