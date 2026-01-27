import LetterSection from "./assets/LetterSection"
import UpgradesSection from "./assets/UpgradesSection"
import PerksSection from "./assets/PerksSection"

function App() {
  return (
    <main className="h-screen w-screen text-3xl">
      <div className="w-full h-[50vh] bg-white"></div>
      <LetterSection />
      <UpgradesSection />
      <PerksSection />
    </main>
  )
}

export default App
