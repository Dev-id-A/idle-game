import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    clickLevel: 1
}

const counterReducer = createSlice({
    name: "mailsCount",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += state.clickLevel
        },
        reduceForPurchase: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        levelUpClick: (state) =>{
            state.clickLevel += 1
        }
    }
})

export const {increment, reduceForPurchase, levelUpClick} = counterReducer.actions
export default counterReducer.reducer