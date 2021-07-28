
function PopupWithForm(props) {

    return (
        <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_is-opened' : ' '}`}>
            <div className={`popup__content popup__content_${props.name}`}>
                <button onClick={props.close} type="button" aria-label="Закрыть" className={`button popup__close popup__close_${props.close}`}/>
                <h2 className="popup__title">{props.title}</h2>
                <form name={`form-${props.name}`} className={`popup__form popup__form_${props.name}`} novalidate>
                    {props.children}
                </form>    
                <button type="submit" className={`popup__button-submit popup__button-submit_${props.name}`}>{props.buttonText}</button>
            </div>
        </section>
    )
}

export default PopupWithForm;
