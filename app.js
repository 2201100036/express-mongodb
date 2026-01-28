require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());

mongoose.connect(MONGO_URL)
.then(() => console.log("データベース接続成功"))
.catch((err) => console.log(err));

app.use(express.static(__dirname)); 

app.get('/notes_from_b', async (req, res) => {
    try {
        const notes = await mongoose.connection.db.collection('notes').find().toArray();
        res.json(notes);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(PORT, () => {
    console.log("サーバが起動しました");
});
