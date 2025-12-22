import type { SendMailsStates } from "./Interfaces"

function LetterSection({mailsSended, setMailsSended}: SendMailsStates) {
  return (
    <div className="w-full mt-10 border-b-3 flex flex-col items-center">
        <h1>Emails sended: {mailsSended}</h1>
        <button className="size-36" onClick={()=> setMailsSended(prev=>prev+=1)}>
          <img src="/SVG/letter.svg" alt="Letter" />
        </button>
      </div>
  )
}

export default LetterSection