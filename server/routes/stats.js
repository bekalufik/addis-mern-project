const express = require("express");
const Song = require("../models/song");
const router = express.Router()



// Get total number of songs, artists, albums, and genres
router.get('/', async (req, res) => {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct('artist').countDocuments();
    const totalAlbums = await Song.distinct('album').countDocuments();
    const totalGenres = await Song.distinct('genre').countDocuments();

    res.status(200).json({
        totalSongs,
        totalArtists,
        totalAlbums,
        totalGenres
    });
});


// Get number of songs in each genre
router.get('/genres', async (req, res) => {
    const genres = await Song.aggregate([
        { $group: { _id: '$genre', count: { $sum: 1 } } }
    ]);

    res.status(200).json(genres);
});

// Get number of songs and albums each artist has
router.get('/artists', async (req, res) => {
    const stats = await Song.aggregate([
        { $group: { _id: '$artist', totalSongs: { $sum: 1 }, totalAlbums: { $addToSet: '$album' } } },
        { $project: { _id: 0, artist: '$_id', totalSongs: 1, totalAlbums: { $size: '$totalAlbums' } } }
    ]);

    res.status(200).json(stats);
});

module.exports = router