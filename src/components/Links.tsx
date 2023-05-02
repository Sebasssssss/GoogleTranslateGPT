import { Stack } from 'react-bootstrap'

interface Props {
  description: string
  title: string
  shortLink: string
  longLink: string
  image: string
}

const ListLinks: Props[] = [
  {
    title: 'Traductor de Google',
    description:
      'El servicio de Google, que se ofrece sin coste económico, traduce al instante palabras, frases y páginas web a más de 100 idiomas.',
    longLink: 'https://translate.google.com',
    shortLink: 'google.com',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1024px-Google_Translate_logo.svg.png'
  },
  {
    title: 'trad (español → inglés) – DeepL Translate',
    description:
      "Traduce 'trad' del español al inglés con el traductor más preciso del mundo. Millones de personas traducen con DeepL cada día.",
    longLink:
      'https://www.deepl.com/es/translator-mobile/q/es/trad/en/transl/fdd38950',
    shortLink: 'google.com',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACK0lEQVR4AcVXA6xcQRS9/+E7qm3t3le7Qf1m5teMG9UNatsMa0Z1G9UNa9u2beNOPZvs5Hey8/9JznruOaN774IR6ndK85CPJD74xZHyM8gJuChaucivkui3GN6i77oAQBLYgF85rEkiO3+J6XjQC8IGkDBUbF7ERb6AAn/RCyv86gd8DUSySoKE+T6LIRTspQxqyDcesqmAjTKN99mE5ucDOyWT481ykBUGfBPUrOlDPLhR1lkT4I4b8HbJkTCg17NMTbhR3gniwUfeL+5AFB3hH9Bnu0wMSA1QoAbtH3cgXUP1t2yU4Sr0NzLgIlv45xA1auQBwQ1YC/ruvF0DCsVhH/kKev3YRb4MIqywPFQ/x7Fndgzo+ZI4FEo1SoXqIr8XiIEpVXhFMlnbC/g+uwaU7eFXZO5QglEWtG9A5WklWDmRQp99ygkDdzwU23/UikCEsbFsGnjnRcUkmed/LfcnyV9m9li4hvwKBW8ixXxkfVKrhKUBxjo+im70+X37eSDCs5SsGRH1PGTHzBKRQSr2kVVVf8tWmaZio2LkIl8slxwIyZXDSqZ9QmxNUSGzGpVM3VUjbiS+NhGXY6VGdhuSawnsBW7rGxJ9S/bKfkumQxAW95GvlI3mf4qvl2MhUfCR1YktMFpW5vXBApLkXpLAPfsGdKgSZngBH0tC7+0b0CAFWTn5ByQ3DCiQNYJET+aagd99oo+iO4k/tG9Ah0pN87rI58i2DLKB7wE6BfrmPsSHAAAAAElFTkSuQmCC'
  },
  {
    title: 'Traductor de Google',
    description:
      'El servicio de Google, que se ofrece sin coste económico, traduce al instante palabras, frases y páginas web a más de 100 idiomas.',
    longLink: 'https://translate.google.com',
    shortLink: 'google.com',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1024px-Google_Translate_logo.svg.png'
  },
  {
    title: 'trad (español → inglés) – DeepL Translate',
    description:
      "Traduce 'trad' del español al inglés con el traductor más preciso del mundo. Millones de personas traducen con DeepL cada día.",
    longLink:
      'https://www.deepl.com/es/translator-mobile/q/es/trad/en/transl/fdd38950',
    shortLink: 'google.com',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACK0lEQVR4AcVXA6xcQRS9/+E7qm3t3le7Qf1m5teMG9UNatsMa0Z1G9UNa9u2beNOPZvs5Hey8/9JznruOaN774IR6ndK85CPJD74xZHyM8gJuChaucivkui3GN6i77oAQBLYgF85rEkiO3+J6XjQC8IGkDBUbF7ERb6AAn/RCyv86gd8DUSySoKE+T6LIRTspQxqyDcesqmAjTKN99mE5ucDOyWT481ykBUGfBPUrOlDPLhR1lkT4I4b8HbJkTCg17NMTbhR3gniwUfeL+5AFB3hH9Bnu0wMSA1QoAbtH3cgXUP1t2yU4Sr0NzLgIlv45xA1auQBwQ1YC/ruvF0DCsVhH/kKev3YRb4MIqywPFQ/x7Fndgzo+ZI4FEo1SoXqIr8XiIEpVXhFMlnbC/g+uwaU7eFXZO5QglEWtG9A5WklWDmRQp99ygkDdzwU23/UikCEsbFsGnjnRcUkmed/LfcnyV9m9li4hvwKBW8ixXxkfVKrhKUBxjo+im70+X37eSDCs5SsGRH1PGTHzBKRQSr2kVVVf8tWmaZio2LkIl8slxwIyZXDSqZ9QmxNUSGzGpVM3VUjbiS+NhGXY6VGdhuSawnsBW7rGxJ9S/bKfkumQxAW95GvlI3mf4qvl2MhUfCR1YktMFpW5vXBApLkXpLAPfsGdKgSZngBH0tC7+0b0CAFWTn5ByQ3DCiQNYJET+aagd99oo+iO4k/tG9Ah0pN87rI58i2DLKB7wE6BfrmPsSHAAAAAElFTkSuQmCC'
  },
  {
    title: 'Traductor de Google',
    description:
      'El servicio de Google, que se ofrece sin coste económico, traduce al instante palabras, frases y páginas web a más de 100 idiomas.',
    longLink: 'https://translate.google.com',
    shortLink: 'google.com',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1024px-Google_Translate_logo.svg.png'
  },
  {
    title: 'trad (español → inglés) – DeepL Translate',
    description:
      "Traduce 'trad' del español al inglés con el traductor más preciso del mundo. Millones de personas traducen con DeepL cada día.",
    longLink:
      'https://www.deepl.com/es/translator-mobile/q/es/trad/en/transl/fdd38950',
    shortLink: 'google.com',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACK0lEQVR4AcVXA6xcQRS9/+E7qm3t3le7Qf1m5teMG9UNatsMa0Z1G9UNa9u2beNOPZvs5Hey8/9JznruOaN774IR6ndK85CPJD74xZHyM8gJuChaucivkui3GN6i77oAQBLYgF85rEkiO3+J6XjQC8IGkDBUbF7ERb6AAn/RCyv86gd8DUSySoKE+T6LIRTspQxqyDcesqmAjTKN99mE5ucDOyWT481ykBUGfBPUrOlDPLhR1lkT4I4b8HbJkTCg17NMTbhR3gniwUfeL+5AFB3hH9Bnu0wMSA1QoAbtH3cgXUP1t2yU4Sr0NzLgIlv45xA1auQBwQ1YC/ruvF0DCsVhH/kKev3YRb4MIqywPFQ/x7Fndgzo+ZI4FEo1SoXqIr8XiIEpVXhFMlnbC/g+uwaU7eFXZO5QglEWtG9A5WklWDmRQp99ygkDdzwU23/UikCEsbFsGnjnRcUkmed/LfcnyV9m9li4hvwKBW8ixXxkfVKrhKUBxjo+im70+X37eSDCs5SsGRH1PGTHzBKRQSr2kVVVf8tWmaZio2LkIl8slxwIyZXDSqZ9QmxNUSGzGpVM3VUjbiS+NhGXY6VGdhuSawnsBW7rGxJ9S/bKfkumQxAW95GvlI3mf4qvl2MhUfCR1YktMFpW5vXBApLkXpLAPfsGdKgSZngBH0tC7+0b0CAFWTn5ByQ3DCiQNYJET+aagd99oo+iO4k/tG9Ah0pN87rI58i2DLKB7wE6BfrmPsSHAAAAAElFTkSuQmCC'
  }
]

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
