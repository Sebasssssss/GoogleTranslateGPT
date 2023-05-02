import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { useDebounce } from './hooks/useDebounce'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { IoCopy, IoSpeaker, IoSwitch } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { TextArea } from './components/TextArea'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from './constants'
import { useStore } from './hooks/useStore'
import { translate } from './services/translate'
import { SectionType } from './types.d'
import './App.css'
import Links from './components/Links'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

function App() {
  const {
    loading,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useStore()

  const debouncedFromText = useDebounce(fromText, 300)

  useEffect(() => {
    if (debouncedFromText === '') return

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  return (
    <>
      <Navbar />
      <Container fluid>
        <SearchBar />
        <Row>
          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.From}
                value={fromLanguage}
                onChange={setFromLanguage}
              />

              <TextArea
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
              />
            </Stack>
          </Col>

          <Col xs="auto">
            <Button
              variant="link"
              disabled={fromLanguage === AUTO_LANGUAGE}
              onClick={interchangeLanguages}
            >
              <IoSwitch />
            </Button>
          </Col>

          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.To}
                value={toLanguage}
                onChange={setToLanguage}
              />
              <div className="relative">
                <TextArea
                  loading={loading}
                  type={SectionType.To}
                  value={result}
                  onChange={setResult}
                />
                <div className="absolute left-0 bottom-0 flex text-[#fafafa]">
                  <Button variant="link" onClick={handleClipboard}>
                    <IoCopy />
                  </Button>
                  <Button variant="link" onClick={handleSpeak}>
                    <IoSpeaker />
                  </Button>
                </div>
              </div>
            </Stack>
          </Col>
        </Row>
        <div className="w-full inline-flex items-center gap-4">
          <div className="border-b border-zinc-700 w-full"></div>
          <p className="text-xs text-[#969ba1] whitespace-nowrap">
            Abrir con Google Traductor • Comentarios
          </p>
        </div>
        <Links />
      </Container>
    </>
  )
}

export default App
