const { createSlice } = require("@reduxjs/toolkit/dist");

const budgetSlice = createSlice({
    name: 'budget',
    initialState: {
        value: 0
    },
    reducers: {
        updated: (state, action) => {
            state.value == action.payload;
        }
    }
})

export const { updated } = budgetSlice.actions
export default budgetSlice.reducer;