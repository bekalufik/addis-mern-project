import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchSongsSuccess,
  fetchSongsFailure,
  deleteSongSuccess,
} from "../features/songs/songsSlice";

const SongItem = ({ song }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteSongSuccess(song._id));
  };

  return (
    <div className="song-item">
      <div className="song-title">{song.title}</div>
      <div className="song-artist">{song.artist}</div>
      <div className="song-album">{song.album}</div>
      <div className="song-genre">{song.genre}</div>
      <div className="song-actions">
        <Link to={`/songs/${song._id}`} className="btn btn-primary mr-2">
          View
        </Link>
        <Link to={`/songs/edit/${song._id}`} className="btn btn-secondary mr-2">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SongItem;
