const asyncHandler = require('express-async-handler');
const Notes = require("../models/notesModel")

const getNotes = asyncHandler(async(req, res) => {
    const notes = await Notes.find();
    res.status(200).json(notes);
});
const getNote = asyncHandler(async(req, res) => {
    const { id } = req.params;
    console.log(id)
    const notes = await Notes.findById(id);

    res.status(200).json(notes);
})

const createNote = asyncHandler(async(req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const note = await Notes.create({
        title,
        content,
    });

    res.status(400).json(note);
});

const updateNote = asyncHandler(async(req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updatedNote = await Notes.findByIdAndUpdate(
            id, { title, content }, { new: true } // return updated doc and validate fields
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: "Error updating note", error: error.message });
    }
});



const deleteNotes = asyncHandler(async(req, res) => {
    const { id } = req.params;
    console.log(id)
    const notes = await Notes.findByIdAndDelete(id);

    res.status(200).json({
        message: `delete the ${req.params}`
    });
})

module.exports = {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNotes,

}