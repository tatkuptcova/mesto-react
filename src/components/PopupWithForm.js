import React from 'react';

function PopupWithForm(props) {

    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ' '}`}>
            <div className={`popup__content popup__content_${props.name}`}>
                <button onClick={props.onClose} type="button" aria-label="Закрыть" className={`button popup__close popup__close_${props.close}`}/>
                <h2 className="popup__title">{props.title}</h2>
                <form name={`form-${props.name}`} className={`popup__form popup__form_${props.name}`} onSubmit={props.onSubmit} noValidate>
                    {props.children}
                    <button type="submit" className={`popup__button-submit popup__button-submit_${props.name}`}>{props.buttonText}</button>
                </form>    
            </div>
        </section>
    )
}

export default PopupWithForm;
