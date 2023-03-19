import axios from 'axios';

const baseURL = 'http://localhost:5000';

const api = axios.create({
    baseURL,
});

// SONGS API
export const getSongs = async () => {
    const response = await api.get('/songs');
    return response.data;
};

export const getSongById = async (id) => {
    const response = await api.get(`/songs/${id}`);
    return response.data;
};

export const addSong = async (newSong) => {
    const response = await api.post('/songs', newSong);
    return response.data;
};

export const updateSong = async (id, updatedSong) => {
    const response = await api.put(`/songs/${id}`, updatedSong);
    return response.data;
};

export const deleteSong = async (id) => {
    const response = await api.delete(`/songs/${id}`);
    return response.data;
};

// ARTISTS API
export const getArtists = async () => {
    const response = await api.get('/artists');
    return response.data;
};

export const createArtist = async (newArtist) => {
    const response = await api.post('/artists', newArtist);
    return response.data;
};

export const updateArtist = async (id, updatedArtist) => {
    const response = await api.put(`/artists/${id}`, updatedArtist);
    return response.data;
};

export const deleteArtist = async (id) => {
    const response = await api.delete(`/artists/${id}`);
    return response.data;
};

// ALBUMS API
export const getAlbums = async () => {
    const response = await api.get('/albums');
    return response.data;
};

export const createAlbum = async (newAlbum) => {
    const response = await api.post('/albums', newAlbum);
    return response.data;
};

export const updateAlbum = async (id, updatedAlbum) => {
    const response = await api.put(`/albums/${id}`, updatedAlbum);
    return response.data;
};

export const deleteAlbum = async (id) => {
    const response = await api.delete(`/albums/${id}`);
    return response.data;
};

// STATISTICS API
export const getStatistics = async () => {
    const response = await api.get('/stats');
    return response.data;
};
export const getGenresStat = async () => {
    const response = await api.get('/stats/genres');
    return response.data;
};
export const getArtistsStat = async () => {
    const response = await api.get('/stats/artists');
    return response.data;
};
