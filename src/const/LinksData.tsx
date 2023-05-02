interface Props {
  description: string
  title: string
  shortLink: string
  longLink: string
  image: string
}

export const ListLinks: Props[] = [
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
    shortLink: 'deepl.com',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACK0lEQVR4AcVXA6xcQRS9/+E7qm3t3le7Qf1m5teMG9UNatsMa0Z1G9UNa9u2beNOPZvs5Hey8/9JznruOaN774IR6ndK85CPJD74xZHyM8gJuChaucivkui3GN6i77oAQBLYgF85rEkiO3+J6XjQC8IGkDBUbF7ERb6AAn/RCyv86gd8DUSySoKE+T6LIRTspQxqyDcesqmAjTKN99mE5ucDOyWT481ykBUGfBPUrOlDPLhR1lkT4I4b8HbJkTCg17NMTbhR3gniwUfeL+5AFB3hH9Bnu0wMSA1QoAbtH3cgXUP1t2yU4Sr0NzLgIlv45xA1auQBwQ1YC/ruvF0DCsVhH/kKev3YRb4MIqywPFQ/x7Fndgzo+ZI4FEo1SoXqIr8XiIEpVXhFMlnbC/g+uwaU7eFXZO5QglEWtG9A5WklWDmRQp99ygkDdzwU23/UikCEsbFsGnjnRcUkmed/LfcnyV9m9li4hvwKBW8ixXxkfVKrhKUBxjo+im70+X37eSDCs5SsGRH1PGTHzBKRQSr2kVVVf8tWmaZio2LkIl8slxwIyZXDSqZ9QmxNUSGzGpVM3VUjbiS+NhGXY6VGdhuSawnsBW7rGxJ9S/bKfkumQxAW95GvlI3mf4qvl2MhUfCR1YktMFpW5vXBApLkXpLAPfsGdKgSZngBH0tC7+0b0CAFWTn5ByQ3DCiQNYJET+aagd99oo+iO4k/tG9Ah0pN87rI58i2DLKB7wE6BfrmPsSHAAAAAElFTkSuQmCC'
  },
  {
    title: 'Traductor | EL MUNDO',
    description:
      'Con el traductor gratuito online de EL MUNDO puedes traducir al instante palabras y frases de inglés, francés, italiano, alemán y portugués.',
    longLink: 'https://www.elmundo.es',
    shortLink: 'elmundo.es',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAPFBMVEUAAAAAUIwAVo0AV4wAVowAVowAUI8AVo0AVowAVowAVYwAVowAVo0AVo0AVo0AWI4AVowAVo0AVYwAV4tQ+D8kAAAAFHRSTlMAEGCfz+8gP7//kI8w338gb6/PTwsZ8YkAAAC1SURBVHgBjdFVAsMgEADRwQobl/uftS5Iu837QiYKH8Y6HyB4Z0+0YpIbkBtXJ6YTyQOR3pAZRqkDGU/ZfpA2kDAU+20g4XUPO31ANrEcMrgcuNwAJMmB5BLMogVisHqwsOqBw+vByFiCcr7xVyy1C0EK9WcHvB4knB70WD3YMUELRmDSgh4wMVdNDYd0v371woPx3w9rg7bIgtXwMbXBRGEeyyBFatGFVxBcvp03ywT9UuxeADTzGH2+3XVnAAAAAElFTkSuQmCC'
  },
  {
    title: 'TRADUCTOR de Cambridge | inglés español',
    description:
      "Traduce 'trad' del español al inglés con el traductor más preciso del mundo. Millones de personas traducen con DeepL cada día.",
    longLink: 'https://dictionary.cambridge.org',
    shortLink: 'cambridge.org',
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc1Nzc3Nzc3NzU3Nzg3Mjc3Ny03Nzc3Nzc3NzcuNzc1Nzc3MjU3OC01N//AABEIACAAIAMBEQACEQEDEQH/xAAaAAACAgMAAAAAAAAAAAAAAAAEBgIFAQMH/8QAKRAAAQMCBQQBBQEAAAAAAAAAAQIDEQAEBRIhIjETFEFhUQcVJFKRBv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwUABP/EACMRAAEEAgEEAwEAAAAAAAAAAAEAAgMRITFRBBLR8AUikRP/2gAMAwEAAhEDEQA/AOVAVoKKOw7C7zEnEN2TBdUtxLSRmA3KMAan3UZOpiieGPNE6VWQPkaXNGAp3+FXmHOravWemtDhbUMwVuGhEg+qMXUxSvMbDZCEkL42hzhgoMoNeilK1gJoUuTr9P7q2Qex7RBv37tAYuy7CmJhKVBEQrKrdB540rL+QpsrCW3eL4NrR6LMbvtgWSOcfudLf/uLi2cUbEWiO9Zul9e8Dm58jMlRKIATJM6cRHun+N+07z2axfOkOvxG2zuiBwK53jSUFNitchZdodktpcQXgotBQKwkwSmdY9xU06bLbCWGHmne0xPrpzrCrZxtKUlJgFG9SiQYndIP8pe6xWEdGxaI+22j/Wdu7XG+qTnU4rKtbhk+f2Mg6/HPMsHluBSUi8m0qurRnV05yScubmPE1UlLSCFRCcqxTid6ZJuVknkwNfGulARM9J8ru4qRxO8AP5CtZnaPIg+Pij/NvpPld3FVy10SVwC//9k='
  },
  {
    title: 'Traductor confiable inglés-español',
    description:
      'Encuentre traducciones instantáneas en más de 90 idiomas, incluidos español, inglés, francés y muchos más. ¡Todas nuestras traducciones se realizan con ...',
    longLink: 'https://es.bab.la',
    shortLink: 'bab.la',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAJFBMVEX///8ygMkpfMceecahweRLjc71+fzB1u1km9TW5PN/q9rq8fknhrCIAAABDklEQVQ4jZVSSRLDIAyrN2yc//+3YLaE0EM9TIYgIYzQ5/NHpaxcSvN1hNUFCcsgFNe0w9kIYRaS6VPcG1wESmFQ/CaSJGACZ1Vll8ohma0kiz3CY09So7ow/pkqbo/evWp47y9w2boOhs4pYN4Il1TVMQPYBfq+PE44EHicoT8IVQF53AFQN/wKZ3gqAGzuhzdByN1+ud+jeQeU17wUD6subt5Dc5v7GUBkNQ9s0FewWdmfqr1mDcR6995XJjgWzZspHnFeTSu8KAg3vPT9SFxkbtw6xYhQdk7Nne3GhopWR1DMeYXtSSkPiJ5eiZ+04ilaei2vyrRymk4cJ3nvuvEU/IyP0vzr7Eej/TNZX/iuBj5zUCx2AAAAAElFTkSuQmCC'
  },
  {
    title: 'Traductor de idiomas de ABC.es',
    description:
      'Traductor de idiomas online y gratuito de ABC.es. Traduce textos y palabras del español al inglés, inglés a español y otros muchos idiomas (francés, alemán, ...',
    longLink: 'https://www.abc.es',
    shortLink: 'abc.es',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVR4AWIYTGAU6Bh7XgKwOQcYCARAFEAFJAFKAKKIoJsECAFVkShFQhdYCCEUQEgJ6AQFSEfoMD20jLV4zPB9n374z5wYc6BAmRETFlzScJ2EVyhYMvjfd1qs6IZMJz02lHjSDgVHeryp8KGanV7kwYwb+5wFc7bsGGYLpjRD2ZcaCWsaXPlNE8reD8RToOEQB9JkhmagLlShORDbQ2lONDVqQCwM4Y0CAHmdRrxTs1xEAAAAAElFTkSuQmCC'
  }
]
