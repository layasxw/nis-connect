import express from 'express';
import {Collaboration} from '../models/Collaborations';

const router = express.Router();

//получаем весь список 
// put - обновить все данные, patch - обновить частичные данные, post - отправить данные на сервер, delete - удалить данные

router.get('/', async (req, res) => {
    try {
        const collaborations = await Collaboration.find();
        res.status(200).json(collaborations);  
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//создание новой коллаборации


router.post('/', async (req, res) => {
    const newCollaboration = new Collaboration({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        tags: req.body.tags,
        members: req.body.members || []
    });
    try {
        const savedCollaboration = await newCollaboration.save();
        res.status(201).json(savedCollaboration);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

//получение по айди
router.get('/:id', async (req, res) => {
    try {
        const collaboration = await Collaboration.findById(req.params.id);
        if (!collaboration) {
            return res.status(404).json({message:"Collaboration wasn't found"});
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
