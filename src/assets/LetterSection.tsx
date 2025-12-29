import { useDispatch } from "react-redux"
import { increment, levelUpClick } from "../states/counter"
import { useSelector } from "react-redux"
import type { RootState } from "../main"

function LetterSection() {

  let dispatch = useDispatch()
  let counter = useSelector((state: RootState) => state.counter.value)
  let clickLevel = useSelector((state: RootState) => state.counter.clickLevel)
  let mailsForLevelUp = useSelector((state: RootState) => state.counter.mailsForLevelUp)

  return (
    <div className="w-full mt-10 border-b-3 flex flex-col items-center gap-2">
        <h1>Emails sended: {counter}</h1>
        <h2>Click level: {clickLevel}</h2>
        <button className="border-2 rounded-md px-3 py-1 bg-green-300" 
          onClick={()=>dispatch(levelUpClick())}>Level up: {mailsForLevelUp} mails</button>
        <button className="size-36" onClick={()=> dispatch(increment())}>
          <img src="/SVG/letter.svg" alt="Letter" />
        </button>
      </div>
  )
}

export default LetterSection