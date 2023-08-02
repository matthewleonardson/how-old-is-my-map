const AnswerBlock = ({answerChoice, newId, setCurrentQuestionId, setDateRange, setQuizIsFinished}) => {

    const handleClick = () => {
        
        if(typeof newId == 'number') {
            setCurrentQuestionId(newId)
        } else {
            setQuizIsFinished(true)
            setDateRange(newId)
        }
    
    }


    return (

        <div className = "answerBlock">
            <button onClick = {handleClick}>
                {answerChoice}
            </button>
        </div>

    )

}

export default AnswerBlock