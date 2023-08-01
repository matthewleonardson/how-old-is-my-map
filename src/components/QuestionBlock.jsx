import { useEffect } from "react";
import AnswerBlock from "./AnswerBlock";

const QuestionBlock = ({quizIsFinished, questions, currentQuestionId, setCurrentQuestionId, dateRange, setDateRange, setQuizIsFinished}) => {

   useEffect(() => {
    setDateRange((questions.find(x => x.id == currentQuestionId)).daterange)
   }, [currentQuestionId])


    return (

        <div>

        <div className = "dateRange">
            <p>The current Date Range is: <strong>{dateRange}</strong></p>
        </div>

        <div className = "questionBlock">
            {/* display question*/}
            <h1>{ (questions.find(x => x.id == currentQuestionId)).question }</h1>


            {Object.entries((questions.find(x => x.id == currentQuestionId)).options).map(([key, value]) => (
                    <div>
                    <AnswerBlock 
                        answerChoice = {key}
                        newId = {value}
                        setCurrentQuestionId = {setCurrentQuestionId}
                        setDateRange = {setDateRange}
                        setQuizIsFinished = {setQuizIsFinished}
                    />
                    </div>
            ))}



        </div>
    
        </div>

    )


}

export default QuestionBlock;