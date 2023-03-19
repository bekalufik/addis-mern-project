import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchSongsRequest, fetchSongsSuccess, fetchSongsFailure, deleteSongRequest, deleteSongSuccess, deleteSongFailure, addSongRequest, addSongSuccess, addSongFailure, editSongRequest, editSongSuccess, editSongFailure, getSongByIdSuccess, getSongByIdFailure } from '../features/songs/songsSlice';
import { getSongs, getSongById, addSong, updateSong, deleteSong } from '../services/api';


function* fetchSongs() {
    try {
        const songs = yield call(getSongs);
        yield put(fetchSongsSuccess(songs));
    } catch (error) {
        yield put(fetchSongsFailure(error));
    }
}

export function* watchFetchSongs() {
    yield takeLatest('songs/fetchSongsSuccess', fetchSongs);
}


// ADD SONG SAGA
function* createSong(action) {
    try {
        const { payload } = action;
        const response = yield call(addSong, payload);
        yield put(addSongSuccess(response));
    } catch (error) {
        yield put(addSongFailure(error));
    }
}

export function* watchAddSong() {
    yield takeLatest('songs/addSongSuccess', createSong);
}

// FETCH SONG BY ID SAGA
function* fetchSongByIdRequest(action) {
    try {
        const { payload } = action;
        const song = yield call(getSongById, payload);
        yield put(getSongByIdSuccess(song));
    } catch (error) {
        yield put(getSongByIdFailure(error));
    }
}
export function* watchFetchSongById() {
    yield takeLatest('songs/getSongByIdSuccess', fetchSongByIdRequest);
}


// EDIT SONG SAGA
function* editSong(action) {
    try {
        const { id,updates } = action;
        const song = yield call(updateSong, id, updates);
        yield put(editSongSuccess(song));
    } catch (error) {
        yield put(editSongFailure(error));
    }
}

export function* watchEditSong() {
    yield takeLatest('songs/editSongSuccess', editSong);
}

// DELETE SONG SAGA
function* removeSong(action) {
    try {
        const id = action.payload;
        yield call(deleteSong, id);
        yield put(deleteSongSuccess(id));
    } catch (error) {
        yield put(deleteSongFailure(error));
    }
}

export function* watchDeleteSong() {
    yield takeLatest('songs/deleteSongSuccess', removeSong);
}
