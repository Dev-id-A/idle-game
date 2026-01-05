import { upgrades } from "./UpgradesJson"

function UpgradesSection() {
  return (
    <section className="flex flex-col gap-2 p-2 w-full">
        {upgrades.map((upgrade)=>{
            return (
            <div className="border-2 flex flex-row items-center rounded-sm text-[20px] py-2" key={upgrade.id}>

                <div className="px-1">
                    <img className="border-1 w-16 h-16" src={upgrade.src} alt={upgrade.name} />
                </div>

                <div className="w-full flex flex-col gap-2 px-5">
                    <h2>{upgrade.name}</h2>
                    <h3>{upgrade.mailsSended} m/s</h3>
                    <div className="w-full h-2 border-2 rounded-full">
                        <div className="h-full w-[50%] bg-[#98F5FF]"></div>
                    </div>
                    <button className="border-2 rounded-md px-3 py-1 bg-green-300 w-1/2">
                        {upgrade.actualLevel > 1 ? "Upgrade":"Buy"} {upgrade.cost}</button>
                </div>

            </div>)
        })}
    </section>
  )
}

export default UpgradesSection