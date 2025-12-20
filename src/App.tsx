import { useState } from "react"


function App() {
  const [mailsSended, setMailsSended] = useState<number>(0)

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center text-6xl">
      <h1>{mailsSended}</h1>
      <button onClick={()=> setMailsSended(prev=>prev+=1)}>Click me!</button>
    </main>
  )
}

export default App
