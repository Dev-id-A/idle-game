import { useState } from "react"
import LetterSection from "./assets/LetterSection"


function App() {
  const [mailsSended, setMailsSended] = useState<number>(0)

  return (
    <main className="h-screen w-screen flex flex-col items-center text-3xl">
      <LetterSection {...{mailsSended, setMailsSended}}/>
    </main>
  )
}

export default App
