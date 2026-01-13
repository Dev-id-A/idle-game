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
        },
        addMails: (state, action) => {
            state.value += action.payload
        }

    }
})

export const {increment, levelUpClick, addMails} = counterReducer.actions
export default counterReducer.reducer

