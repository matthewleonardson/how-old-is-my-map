const InfoButton = ({setAboutPopupIsOpen}) => {
    
    const handleClick = () => {
        setAboutPopupIsOpen(true)
    }

    return (
        <div className = "infoButton">
            <button onClick = {handleClick}>INFO</button>
        </div>
    )
}

export default InfoButton