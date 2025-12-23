import { useDispatch } from "react-redux"
import { increment } from "../states/counter"
import { useSelector } from "react-redux"

function LetterSection() {

  let dispatch = useDispatch()
  let counter = useSelector(state => state.counter.value)

  return (
    <div className="w-full mt-10 border-b-3 flex flex-col items-center">
        <h1>Emails sended: {counter}</h1>
        <button className="size-36" onClick={()=> dispatch(increment())}>
          <img src="/SVG/letter.svg" alt="Letter" />
        </button>
      </div>
  )
}

export default LetterSection