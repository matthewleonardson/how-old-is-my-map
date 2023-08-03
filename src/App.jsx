import { useState } from 'react'
import QuestionBlock from './components/QuestionBlock'
import Questions from './choices.json';
import ResultBlock from './components/ResultBlock';
import RestartPrompt from './components/RestartPrompt';
import AboutPopup from './components/AboutPopup';
import InfoButton from './components/InfoButton';

function App() {

  const [currentQuestionId, setCurrentQuestionId] = useState(1)
  const [quizIsFinished, setQuizIsFinished] = useState(false)
  const [dateRange, setDateRange] = useState(null)
  const [aboutPopupIsOpen, setAboutPopupIsOpen] = useState(false)

  // currently we're handling the AboutPopup's visibility within the component. 
  // maybe consider changing for all components?

  return (
    <div className = 'app'>
      {!quizIsFinished && <QuestionBlock 
        questions = {Questions}
        currentQuestionId = {currentQuestionId}
        setCurrentQuestionId = {setCurrentQuestionId}
        dateRange = {dateRange}
        setDateRange = {setDateRange}
        setQuizIsFinished = {setQuizIsFinished}
      />}

      {quizIsFinished && <ResultBlock 
        dateRange = {dateRange}
      />}

      {quizIsFinished && <RestartPrompt 
        setCurrentQuestionId = {setCurrentQuestionId} 
        setQuizIsFinished = {setQuizIsFinished}
      />}

      <AboutPopup 
        aboutPopupIsOpen = {aboutPopupIsOpen}
        setAboutPopupIsOpen = {setAboutPopupIsOpen}
      />

      <InfoButton
        setAboutPopupIsOpen={setAboutPopupIsOpen}
      />
    </div>
  )

}

export default App
