const RestartPrompt = ({setQuizIsFinished, setCurrentQuestionId}) => {

    const handleClick = () => {

        setQuizIsFinished(false)
        setCurrentQuestionId(1)

    }

    return(

        <div className = "restartPrompt">
            <button onClick = {handleClick}>Click to Restart</button>
        </div>

    )


}

export default RestartPrompt;