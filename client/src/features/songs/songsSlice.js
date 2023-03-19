import { createSlice } from '@reduxjs/toolkit';


const songsSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: [],
        loading: false,
        error: null,
        selectedSong:{},
    },
    reducers: {
        fetchSongsRequest: (state) => {
            state.loading = true;
        },
        fetchSongsSuccess: (state, action) => {
            state.songs = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchSongsFailure: (state, action) => {
            state.songs = [];
            state.loading = false;
            state.error = action.payload;
        },
        deleteSongRequest: (state) => {
            state.loading = true;
        },
        deleteSongSuccess: (state, action) => {
            state.songs = state.songs.filter(song => song.id !== action.payload);
            state.loading = false;
            state.error = null;
        },
        deleteSongFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addSongRequest: (state, action) => {
            state.loading = true;
        },
        addSongSuccess: (state, action) => {
            state.songs.push(action.payload);
        },
        addSongFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        editSongRequest: (state) => {
            state.loading = false;
        },
        editSongSuccess: (state, action) => {
            const { _id, title, artist, album, genre } = action.payload;
            const existingSong = state.songs.find((song) => song._id ===_id);
            if (existingSong) {
                existingSong.title = title;
                existingSong.artist = artist;
                existingSong.album = album;
                existingSong.genre = genre;
            }
        },
        editSongFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        getSongByIdRequest:(state)=>{
            state.loading=false;
        },
        getSongByIdSuccess:(state,action)=>{
            const index = state.songs.findIndex(
                (song) => song._id === action.payload._id
            );
            if (index >= 0) {
                state.songs[index] = action.payload;
                //state.songs=state.songs[index];
                state.selectedSong=state.songs[index];
            }
        },
        getSongByIdFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
})


export const { fetchSongsRequest, fetchSongsSuccess, fetchSongsFailure, deleteSongRequest, deleteSongSuccess, deleteSongFailure, addSongRequest, addSongSuccess, addSongFailure, editSongRequest, editSongSuccess, editSongFailure, getSongByIdSuccess, getSongByIdFailure } = songsSlice.actions;

export default songsSlice.reducer;