function ImagePopup(props) {
  
    return(
        <div className={`popup popup_type_view ${props.isOpen ? 'popup_opened' : ' '}`}>
            <div className="popup__container">
                <img className="popup__image" src={props.link} alt="#"/>
                <button type="button" aria-label="Закрыть" className="button popup__close popup__close_image" onClick={props.onClose}></button>
                <p className="popup__caption">{props.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup;