const AnswerBlock = ({answerChoice, newId, setCurrentQuestionId, setQuizIsFinished}) => {

    //
    const handleClick = () => {
        
        if(typeof newId == 'number') {
            setCurrentQuestionId(newId)
        } else {
            setQuizIsFinished(true)
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