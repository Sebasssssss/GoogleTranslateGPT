import { Stack } from 'react-bootstrap'
import { ListLinks } from '../const/LinksData'

export default function Links() {
  return (
    <Stack gap={1}>
      {ListLinks.map(link => {
        return (
          <div
            key={link.title}
            className="w-[700px] flex flex-col gap-1 items-start mt-5"
          >
            <div className="inline-flex items-center gap-2">
              <img className="w-7 h-7 rounded-full bg-white" src={link.image} />
              <div className="flex flex-col text-zinc-300 items-start">
                <h1 className="text-sm">{link.shortLink}</h1>
                <h1 className="text-xs">{link.longLink}</h1>
              </div>
            </div>
            <h1 className="text-[#8ab4f8] text-xl hover:underline cursor-pointer">
              {link.title}
            </h1>
            <p className="text-zinc-300 text-left text-sm">
              {link.description}
            </p>
          </div>
        )
      })}
    </Stack>
  )
}
