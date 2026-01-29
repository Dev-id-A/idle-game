import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../main"
import { toggleIsOpen } from "../states/perks"

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

        <div className="text-center pt-6">
            <h1>Upgrades</h1>
        </div>
    </div>
  )
}

export default PerksSection