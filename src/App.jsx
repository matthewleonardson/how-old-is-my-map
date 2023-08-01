import { useState } from 'react'
import QuestionBlock from './components/QuestionBlock'
import Questions from './choices.json';
import ResultBlock from './components/ResultBlock';

function App() {

  const [currentQuestionId, setCurrentQuestionId] = useState(1)
  const [quizIsFinished, setQuizIsFinished] = useState(false)
  const [dateRange, setDateRange] = useState(null)


  return (
    <div>
      {!quizIsFinished && <QuestionBlock 
        quizIsFinished = {quizIsFinished}
        questions = {Questions}
        currentQuestionId = {currentQuestionId}
        setCurrentQuestionId = {setCurrentQuestionId}
        dateRange = {dateRange}
        setDateRange = {setDateRange}
        setQuizIsFinished = {setQuizIsFinished}
        />}

        {quizIsFinished && <ResultBlock dateRange={dateRange}/>}
    </div>
  )
}

export default App
