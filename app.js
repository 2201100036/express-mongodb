require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.static(__dirname)); 


const notesRouter = require('./routes/notes_from_b');


app.use('/notes_from_b', notesRouter);

app.listen(PORT, () => {
    console.log(`サーバが起動しました。ポート番号: ${PORT}`);
});
