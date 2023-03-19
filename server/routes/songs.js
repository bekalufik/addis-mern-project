const express = require("express");
const Song = require("../models/song");
const router = express.Router()




// API routes
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).send('error' + err)
  }
});

router.get("/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.json(song);
  } catch (err) {
    res.send("error" + err);
  }
});

router.post("/", async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).json(song);
  } catch (err) {
    res.status(400).send("error" + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(song);
  } catch (err) {
    res.send("error" + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Song.findByIdAndRemove(req.params.id);
    res.json({ message: "Song removed" });
  } catch (err) {
    res.send("error" + err);
  }
});


module.exports = router