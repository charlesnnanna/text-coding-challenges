import { useEffect, useRef, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'


export interface MyResultType {
  title: string,
  value: number
}

const App = () => {

  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [inputs, setInputs] = useState('')
  const [words, setWords] = useState(0)
  const [characters, setCharacters] = useState(0)
  const [sentences, setSentences] = useState(0)
  const [paragraphs, setParagraphs] = useState(0)
  const [pronouns, setPronouns] = useState(0)

  const [resultBar, setResultBar] = useState<MyResultType[]>([
    {
      title: 'Words',
      value: 0,
    },
    {
      title: 'Characters',
      value: 0,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs ',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ])

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [ref])
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox resultBar={resultBar} />
          <TextArea ref={ref} setInputs={ setInputs} />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
