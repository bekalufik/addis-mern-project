import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
} from "../features/songs/songsSlice";

 const AddSong = () => {
 const [title, setTitle] = useState("");
 const [artist, setArtist] = useState("");
 const [album, setAlbum] = useState("");
 const [genre, setGenre] = useState("");

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleSubmit = (e) => {
   e.preventDefault();
   const newSong = {
     title,
     artist,
     album,
     genre,
   };
   dispatch(addSongSuccess(newSong));
   navigate("/");
 };

  return (
    <div>
      <h1>Add Song</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Artist:</label>
          <input
            type="text"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div>
          <label>Album:</label>
          <input
            type="text"
            name="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}
export default AddSong;
