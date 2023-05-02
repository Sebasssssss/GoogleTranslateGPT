import { Stack } from 'react-bootstrap'
import {
  IoSearchRainbow,
  IoCamera,
  IoSearch,
  IoImage,
  IoNews,
  IoVideo,
  IoDots
} from './icons'

export default function SearchBar() {
  return (
    <Stack>
      <Stack className="relative">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
          className="w-24 absolute -left-32 top-7"
        />
        <div className="absolute right-14 top-8 text-[#8ab4f8]">
          <IoCamera />
        </div>
        <div className="absolute right-4 top-8 text-[#8ab4f8]">
          <IoSearch />
        </div>
        <input className="w-full rounded-full py-2 my-4 hover:shadow-lg" />
      </Stack>

      <div className="text-sm relative font-medium text-center border-b border-gray-700 mb-4 w-full inline-flex items-center justify-between">
        <div className="border-b border-gray-700 absolute bottom-0 -left-[320px] w-screen"></div>
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2 inline-flex items-center gap-1 p-2 text-[#8ab4f8] border-b-2 cursor-pointer active border-[#8ab4f8]">
            <IoSearchRainbow /> Todos
          </li>
          <li className="mr-2 inline-flex items-center gap-1 p-2 text-[#969ba1] cursor-pointer">
            <IoImage /> Imagenes
          </li>
          <li className="mr-2 inline-flex items-center gap-1 p-2 text-[#969ba1] cursor-pointer">
            <IoNews /> Noticias
          </li>
          <li className="mr-2 inline-flex items-center gap-1 p-2 text-[#969ba1] cursor-pointer">
            <IoVideo /> Videos
          </li>
          <li className="inline-flex items-center gap-1 p-2 text-[#969ba1] cursor-pointer">
            <IoDots /> Mas
          </li>
        </ul>
        <div className="text-[#969ba1]">Herramientas</div>
      </div>
    </Stack>
  )
}
