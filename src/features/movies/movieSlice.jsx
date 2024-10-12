import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieAPI from "../../Common/API/MovieAPI.jsx";
import { APIKey } from "../../Common/API/MovieAPIKey.jsx";

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
};

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const res = await movieAPI.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
    return res.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const res = await movieAPI.get(`?apiKey=${APIKey}&s=${term}&type=series`);
    return res.data;
});

export const fetchAsyncMovieOrShowDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowDetails', async (id) => {
    const res = await movieAPI.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    return res.data;
});

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, () => {
                // Handle pending state if needed
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(fetchAsyncMovies.rejected, () => {
                console.log("rejected");
            })
            .addCase(fetchAsyncShows.fulfilled, (state, action) => {
                state.shows = action.payload;
            })
            .addCase(fetchAsyncMovieOrShowDetails.fulfilled, (state, action) => {
                state.selectedMovieOrShow = action.payload;
            });
    }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
