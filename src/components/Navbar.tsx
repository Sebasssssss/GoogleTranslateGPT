import { IoConfig, IoMenu } from './icons'

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
        <img
          className="rounded-full hover:bg-zinc-300/20 p-1 cursor-pointer"
          src="https://lh3.googleusercontent.com/ogw/AOLn63HO3yMbKWrNK7lTj58xCZOi4APJhVMALCbPNFpP=s32-c-mo"
        />
      </div>
    </header>
  )
}
