import { createSlice } from "@reduxjs/toolkit";
import { upgrades } from "../assets/UpgradesJson";

const upgradesReducer = createSlice({
    name: "upgrades",
    initialState: upgrades,
    reducers: {
        levelUp(state, action){
            const upgrade = state.find(u => u.id === action.payload)
        if(upgrade){
            upgrade.actualLevel += 1
        }
        }   
    }
})

export const {levelUp} = upgradesReducer.actions
export default upgradesReducer.reducer