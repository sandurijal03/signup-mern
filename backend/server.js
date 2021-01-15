const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(`${process.env.DB_URI}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database connected'))
  .catch((err) => console.log(err));

app.use('/api', routes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on localhost:${process.env.PORT}`),
);
