import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const perksReducer = createSlice({
    name: "perks",
    initialState,
    reducers:{
        toggleIsOpen:(state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const {toggleIsOpen} = perksReducer.actions
export default perksReducer.reducer