const { createSlice } = require("@reduxjs/toolkit/dist");

const incomeSlice = createSlice({
    name: 'income',
    initialState: {
        value: []
    },
    reducers: {
        updatedIncome: (state, action) => {
            state.value == action.payload;
        }
    }
})

export const { updatedIncome } = incomeSlice.actions
export default incomeSlice.reducer;