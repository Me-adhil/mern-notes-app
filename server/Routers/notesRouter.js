const express = require('express');
const router = express.Router();
const { deleteNotes, getNotes, getNote, updateNote, createNote } = require("../Controllers/notesController")


router.route("/note").get(getNotes)
router.route("/note/:id").get(getNote)
router.route("/note/:id").put(updateNote)
router.route("/note").post(createNote)
router.route("/note/:id").delete(deleteNotes)
module.exports = router;