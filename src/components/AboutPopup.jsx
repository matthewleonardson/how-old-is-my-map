const AboutPopup = ({aboutPopupIsOpen, setAboutPopupIsOpen}) => {

    const handleClick = () => {
        setAboutPopupIsOpen(false)
    }

    return (aboutPopupIsOpen) ? (
        <div className="aboutPopup">
            <div className="aboutPopupInner">
                <button className="aboutPopupCloseButton" onClick={handleClick}>close</button>
            <h1>About</h1>
            <p>How Old Is My Map? is a simple website based on XKCD #1668</p>
            </div>
        </div>
    ) : ""



}

export default AboutPopup   