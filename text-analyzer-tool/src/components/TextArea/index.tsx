import { ChangeEvent, Dispatch, SetStateAction, forwardRef } from 'react';
import './index.scss'

type TextAreaProps = {
  setInputs: Dispatch<SetStateAction<string>>
  
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {

  const {setInputs} = props
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setInputs(e.target.value)
    console.log(e.target.value)
  }
  return <textarea ref={ref } onChange={(e) => handleChange(e)} className="text-area" placeholder="Paste your text here..." />
})

export default TextArea
