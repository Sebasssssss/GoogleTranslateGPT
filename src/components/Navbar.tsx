import { IoConfig, IoMenu } from './icons'
import Avvvatars from 'avvvatars-react'

export default function Navbar() {
  return (
    <header className="absolute top-0 w-full p-4 right-0 grid place-items-end text-[#e8eaed]">
      <div className="inline-flex items-center gap-3">
        <div className="rounded-full hover:bg-zinc-300/20 p-2 cursor-pointer">
          <IoConfig />
        </div>
        <div className="rounded-full hover:bg-zinc-300/20 p-2 cursor-pointer">
          <IoMenu />
        </div>
        <Avvvatars value="Sebass" />
      </div>
    </header>
  )
}
