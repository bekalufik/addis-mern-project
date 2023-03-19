import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSongByIdSuccess } from "../features/songs/songsSlice";
 const SongDetails = () => {
const { id } = useParams();
const dispatch = useDispatch();
const song = useSelector((state) => state.songs.selectedSong);

useEffect(() => {
  dispatch(getSongByIdSuccess(id));
}, [dispatch, id]);

//console.log('songs',song)
  return (
    <div>
      <h2>Song Details</h2>
      {song ? (
        <div>
          <h3>{song.title}</h3>
          <p>Artist: {song.artist}</p>
          <p>Album: {song.album}</p>
          <p>Genre: {song.genre}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default SongDetails;
