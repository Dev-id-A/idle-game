import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../main"
import { toggleIsOpen } from "../states/perks"
import { upgrades } from "./UpgradesJson"
import React from "react"


function PerksSection() {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState)=> state.perks.isOpen)

  return (
    <div className={`fixed ${isOpen ? "bottom-[0vh]":"bottom-[-100vh]"} left-0 w-full h-full bg-white translate-y-[vh]
      transition-all transition-300`}>

        <button className={`absolute bg-white ${isOpen ? "top-4":"-top-12"} right-4 h-12 w-12 border-2 ml-auto
        transition-all transition-300`} onClick={()=> dispatch(toggleIsOpen())}>
            <img src="/SVG/arrow.svg" alt="Arrow"  className={`${isOpen ? "rotate-x-180":"rotate-x-0"}`}/>
        </button>

        <div className="h-full flex flex-col justify-around text-center py-6">
            <h1>Upgrades</h1>

            {upgrades.map((upgrade)=>{
              return(
                <React.Fragment key={upgrade.id}>
                  <button className="text-2xl">{upgrade.name}</button>
                  <div className="flex flex-center justify-center gap-5">
                  {upgrade.perks.map((perk)=>{
                    return(
                      <div className="border h-12 w-12" key={perk.id}>
                        <h3 className="text-xl">{perk.name}</h3>
                      </div>
                    )
                  })}

                  </div>
                </React.Fragment>
            )
            })}
        </div>
    </div>
  )
}

export default PerksSection