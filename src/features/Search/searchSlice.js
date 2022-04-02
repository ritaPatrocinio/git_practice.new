import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        term: ''
    },
    reducers: {
        changeTerm: (state, action) => {
            state.term = action.payload;
        }
    }
}
)

export const {changeTerm} = searchSlice.actions;
export default searchSlice.reducer;
export const selectTerm = (state) => state.search.term;