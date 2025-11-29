import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());


// подключение к монго дб
mongoose.connect(
    "",
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err));

// тестовый роут
app.get('/', (req, res) => {
    res.send('API works!')
})

//запуск сервера
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));