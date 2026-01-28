const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

mongoose.connect("mongodb+srv://2201100036:natuyasumi5176@cluster0.kp1ld0r.mongodb.net/notes?appName=Cluster0")
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

app.listen(30016, () => {
    console.log("サーバが起動しました");
});
