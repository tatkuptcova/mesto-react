export default function ImagePopup(props) {
    
    return(
        <div className={`popup popup_${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <img className="popup__image" src={props.link} alt="1"/>
                <button type="button" aria-label="Закрыть" onClick={props.onClose} className="button popup__close popup__close_image"></button>
                <p className="popup__caption"></p>
            </div>
        </div>
    )
}