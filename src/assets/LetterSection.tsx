import { useDispatch } from "react-redux"
import { increment, levelUpClick } from "../states/counter"
import { useSelector } from "react-redux"
import type { RootState } from "../main"

function LetterSection() {

  let dispatch = useDispatch()
  let counter = useSelector((state: RootState) => state.counter.value)
  let clickLevel = useSelector((state: RootState) => state.counter.clickLevel)

  return (
    <div className="w-full mt-10 border-b-3 flex flex-col items-center">
        <h1>Emails sended: {counter}</h1>
        <h2>Click level: {clickLevel}</h2>
        <button onClick={()=>dispatch(levelUpClick())}>Level up</button>
        <button className="size-36" onClick={()=> dispatch(increment())}>
          <img src="/SVG/letter.svg" alt="Letter" />
        </button>
      </div>
  )
}

export default LetterSection