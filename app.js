const express = require('express'); 

const transformerRoute = require('./controllers/transformers');

const app = express(); 
  
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Connected');
}); 

app.use('/transformers', transformerRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));