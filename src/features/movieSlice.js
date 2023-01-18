import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMovies } from "../services/movieService";

const initialState = {
  loading: false,
  allMovies: [],
  favorites: [],
  error: "",
  search: "",
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (search) => {
    try {
      const response = await getAllMovies(search);
      return response.data.results;
    } catch (err) {
      console.err(err);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload.toLowerCase();
    },
    addToFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorite: (state, action) => {
      let filteredFavs = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
      state.favorites = filteredFavs;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.loading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.allMovies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default movieSlice.reducer;
export const { updateSearch, addToFavorite, removeFromFavorite } =
  movieSlice.actions;
