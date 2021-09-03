const express = require('express');
const cors = require('cors'); 
const characters = require('./routes/api/characters.js'); 
const films = require('./routes/api/films.js');
 
//create express application 
const app = express();

// middleware 
app.use('*', cors()); 
// Init Middleware for body parser 
//parses json and only looks at requests where the Content-Type header matches the type option
// app.use(express.json({extended: false}))

const PORT = process.env.PORT || 5000; 

// app.get('/', (req, res) => {
//     res.send(characters);
// }); 

// define routes 
app.use('/api/characters', characters); 
app.use('/api/films', films); 


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))