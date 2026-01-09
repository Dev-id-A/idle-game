import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    clickLevel: 1,
    mailsForLevelUp: 10
}

const counterReducer = createSlice({
    name: "mailsCount",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += state.clickLevel
        },
        levelUpClick: (state) =>{
            if(state.value >= state.mailsForLevelUp){
                state.value -= state.mailsForLevelUp
                state.mailsForLevelUp *= 2
                state.clickLevel += 1
                return;
            }
        }
    }
})

export const {increment, levelUpClick} = counterReducer.actions
export default counterReducer.reducer

