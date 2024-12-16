import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rating: '',
  sortBy: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setRatingFilter: (state, action) => {
      state.rating = action.payload;
    },
    setSortFilter: (state, action) => {
      state.sortBy = action.payload;
    },
    clearFilters: () => initialState,
  },
});

export const { setRatingFilter, setSortFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
