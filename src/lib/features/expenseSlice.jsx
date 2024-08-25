const { createSlice } = require("@reduxjs/toolkit");

const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        value: []
    },
    reducers: {
        updatedExpense: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updatedExpense } = expenseSlice.actions
export default expenseSlice.reducer;