import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB успешно подключена!');
    } catch (err) {
        console.error('Ошибка подключения к MongoDB: ', err.message);
        process.exit(1);
    }
};

connectDB();
app.get('/', (req, res) => {
    res.send('API работает и подключен к MongoDB.');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
})