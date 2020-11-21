const express = require('express');

const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://alaoabiodun:alao1996@cluster0.jbxby.mongodb.net/peopleDB?retryWrites=true&w=majority',
    {
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log('Database is successfully connected'))
  .catch(() => console.log('Error in connecting to the database'));

const peopleRoutes = require('./routes/peole.route');

const app = express();

app.use(express.json());

const port = process.env.PORT || 4001;

app.use('/api/v1/', peopleRoutes);

app.listen(port, () => {
  console.log(`The app is running on PORT ${port}`);
});
