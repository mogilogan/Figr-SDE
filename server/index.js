import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import userRouter from "./routes/user.js";
import projectRouter from "./routes/projects.js"

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())


app.use("/user", userRouter);
app.use("/project", projectRouter);

const CONNECTION_URL = 'mongodb+srv://mogi123:figrjob@figr.j2viybo.mongodb.net/?retryWrites=true&w=majority&appName=Figr';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

