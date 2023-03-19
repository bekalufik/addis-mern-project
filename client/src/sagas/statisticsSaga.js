import { call, put, takeLatest } from 'redux-saga/effects';
import { getStatistics, getGenresStat, getArtistsStat } from '../services/api'
import { fetchStatisticsSuccess, fetchStatisticsFailure, fetchGenresSuccess, fetchGenresFailure, fetchArtistsSuccess, fetchArtistsFailure }from '../features/statistics/statisticsSlice'

function* fetchStatistics() {
    try {
        const data = yield call(getStatistics);
        yield put(fetchStatisticsSuccess(data));
    } catch (error) {
        yield put(fetchStatisticsFailure(error));
    }
}

export function* watchFetchStatistics() {
    yield takeLatest('statistics/fetchStatisticsSuccess', fetchStatistics);
}

function* fethGenresStatistics(){
    try{
        const data = yield call(getGenresStat);
        yield put(fetchGenresSuccess(data));
    }catch (error){
        yield put(fetchGenresFailure(error))
    }
}

export function* watchFetchGenresStatistics(){
    yield takeLatest('statistics/fetchGenresSuccess', fethGenresStatistics)
}

function* fetchArtistsStatistics(){
    try{
        const data = yield call(getArtistsStat);
        yield put(fetchArtistsSuccess(data));
    }catch (error){
        yield put(fetchArtistsFailure(error))
    }
}

export function* watchFetchArtistsStatistics(){
    yield takeLatest('statistics/fetchArtistsSuccess', fetchArtistsStatistics)
}