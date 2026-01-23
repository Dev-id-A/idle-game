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
            upgrade.cost *= 2
            if(upgrade.actualLevel > 1){
                upgrade.mailsSended = Math.round(upgrade.mailsSended * 1.5)
            }
            if(upgrade.actualLevel % 25 === 0){
                upgrade.interval /= 1.5
            }
        }
        },
        addTime(state, action){
            const upgrade = state.find(u => u.id === action.payload)
            if(upgrade){
                if(upgrade.actualLevel >= 1){
                    upgrade.actualTime += 50
                }
                if(upgrade.actualTime>=upgrade.interval){
                    upgrade.actualTime -= upgrade.interval
                }  
            }
            }   
            }//End of reducer
})//End of the slice

export const {levelUp, addTime} = upgradesReducer.actions
export default upgradesReducer.reducer