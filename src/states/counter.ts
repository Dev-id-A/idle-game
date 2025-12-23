import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterReducer = createSlice({
    name: "mailsCount",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        reduceForPurchase: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        }
    }
})

export const {increment, reduceForPurchase} = counterReducer.actions
export default counterReducer.reducer