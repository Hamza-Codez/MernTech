const express = require('express');
const app = express();
const router = require('./routes/auth-router');


app.use('/api/auth', router);


// app.get('/', (req, res) => {
//   res.status(200).send('Welcome to the MernTech by Hamza Ahmad');
// })

const Port = 5000;
app.listen(Port, () => console.log(`Server is running on port: ${Port}`));
