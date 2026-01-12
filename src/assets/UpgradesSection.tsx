import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../main"
import { levelUp } from "../states/upgrades"

function UpgradesSection() {
    const dispatch = useDispatch()
    const upgrades = useSelector((state: RootState)=> state.upgrades)
    let counter = useSelector((state: RootState) => state.counter.value)


  return (
    <section className="flex flex-col gap-2 p-2 w-full">
        {upgrades.map((upgrade)=>{
            return (
            <div className="border-2 flex flex-row items-center rounded-sm text-[20px] py-2" key={upgrade.id}>

                <div className="px-1">
                    <img className="border-1 w-16 h-16" src={upgrade.src} alt={upgrade.name} />
                </div>

                <div className="w-full flex flex-col gap-2 px-5">
                    <div className="flex flex-row justify-between">
                        <h2>{upgrade.name}</h2>
                        <h2>Lvl: {upgrade.actualLevel}</h2>
                    </div>

                    <h3>{upgrade.mailsSended} m/s</h3>
                    <div className="w-full h-2 border-2 rounded-full">
                        <div className="h-full w-[50%] bg-[#98F5FF]"></div>
                    </div>
                    <button 
                        onClick={()=>{
                        if(counter>= upgrade.cost){
                            dispatch(levelUp(upgrade.id))
                            counter-=upgrade.cost
                        }}} 
                        className="border-2 rounded-md px-3 py-1 bg-green-300 w-2/3">
                        {upgrade.actualLevel > 0 ? "Upgrade":"Buy"} {upgrade.cost}</button>
                </div>

            </div>)
        })}
    </section>
  )
}

export default UpgradesSection