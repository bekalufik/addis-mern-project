import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSongsSuccess, fetchSongsFailure } from '../features/songs/songsSlice'
import  SongItem  from "./SongItem";
export const SongList = () => {

  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsSuccess());
  }, [dispatch]);
  //console.log(songs);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>SongList</h1>
      <div className="song-item-nav">
        <h5>Title</h5>
        <h5>Artist</h5>
        <h5>Album</h5>
        <h5>Genre</h5>
      </div>
      {songs?.map((song) => (
        <SongItem key={song._id} song={song} />
      ))}
    </div>
  );
}

export default SongList;