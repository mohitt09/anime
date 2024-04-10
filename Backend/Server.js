const express = require('express')
const db = require('./Config/DB');
const cors = require('cors');
const authRoutes = require('./Router/auth');

const app = express()
const port = 3000


app.use(express.json());
app.use(cors());
db();

app.get('/', (req, res) => {
    res.send('Wlecome to the server')
})

app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})