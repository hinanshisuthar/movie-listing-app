import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMovies } from "../services/movieService";

const initialState = {
  loading: false,
  allMovies: [],
  error: "",
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await getAllMovies();
    return response.data.results;
  } catch (err) {
    console.log(err);
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
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
