export default function ImagePopup() {
    return(
        <section className="popup popup_pic">
            <div className="popup__container">
                <img className="popup__image" src="#" alt="#"/>
                <button type="button" aria-label="Закрыть" className="button popup__close popup__close_image"></button>
                <p className="popup__caption"></p>
            </div>
        </section>
    )
    
}