import { createSlice } from '@reduxjs/toolkit';


const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        loading: false,
        error: null,
        data: {},
        stat: {
            byGenre: [],
            byArtist: [],
        }
    },
    reducers: {
        fetchStatisticsRequest: (state, action) => {
            state.loading = true;
        },
        fetchStatisticsSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchStatisticsFailure: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        fetchGenresRequest: (state) => {
            state.loading = true;
        },
        fetchGenresSuccess: (state, action) => {
            state.stat.byGenre = action.payload;
            state.loading = false;
        },
        fetchGenresFailure: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        fetchArtistsRequest: (state) => {
            state.loading = true;
        },
        fetchArtistsSuccess: (state, action) => {
            state.loading = false;
            state.stat.byArtist = action.payload
        },
        fetchArtistsFailure: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchStatistics.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = null;
    //         })
    //         .addCase(fetchStatistics.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(fetchStatistics.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.error.message;
    //         });
    // },
});

export const { fetchStatisticsRequest, fetchStatisticsSuccess, fetchStatisticsFailure, fetchGenresRequest, fetchGenresSuccess, fetchGenresFailure, fetchArtistsRequest, fetchArtistsSuccess, fetchArtistsFailure } = statisticsSlice.actions
export default statisticsSlice.reducer;
