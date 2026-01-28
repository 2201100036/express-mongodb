const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

// 接続文字列の .net/ と ? の間に "notes" を追加しました
mongoose.connect("mongodb+srv://2201100036:natuyasumi5176@cluster0.kp1ld0r.mongodb.net/notes?appName=Cluster0")
.then(() => console.log("データベース接続に成功しました"))
.catch((err) => console.log(err));

app.get('/notes_from_b', async (req, res) => {
    try {
        // notesデータベース内の notesコレクションからデータを取得
        const notes = await mongoose.connection.db.collection('notes').find().toArray();
        res.json(notes);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log("サーバが起動しました。http://localhost:3000/notes_from_b を開いてください");
});
