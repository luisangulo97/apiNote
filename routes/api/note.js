const express = require('express');
const router = express.Router();

const { Note } = require('../../db');

router.get('/', async (req, res) => {
    const notes = await Note.findAll();
    res.json(notes);
});

router.post('/', async (req, res) => {
    const notes = await Note.create(req.body);
    res.json(notes);

    // {
    //     "title": "Jurassic Park",
    //     "description": "Parque de Dinosaurios",
    // }
});

router.get('/:noteId', async (req, res) => {
    const notes = await Note.findAll({
        where: { id: req.params.noteId }
    });
    res.json(notes);
});

router.put('/:noteId', async (req, res) => {
    await Note.update(req.body, {
        where: { id: req.params.noteId }
    });
    res.json({ success: 'Se ha modificado' });

    // {
    //     "title": "Notas Guitarra"
    // }
})

router.delete('/:noteId', async (req, res) => {
    await Note.destroy({
        where: { id: req.params.noteId }
    });
    res.json({ success: 'Se ha borrado' });
})

module.exports = router;