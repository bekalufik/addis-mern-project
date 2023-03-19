import { all } from "redux-saga/effects";

import { watchFetchSongs, watchDeleteSong, watchEditSong, watchAddSong, watchFetchSongById } from '../sagas/songsSaga'
import { watchFetchStatistics, watchFetchArtistsStatistics, watchFetchGenresStatistics } from '../sagas/statisticsSaga'
export default function* rootSaga() {
    yield all([
        watchFetchSongs(),
         watchAddSong(),
         watchFetchSongById(),
         watchEditSong(),
        watchDeleteSong(),
        watchFetchStatistics(),
        watchFetchArtistsStatistics(),
        watchFetchGenresStatistics(),
    ]);
}
