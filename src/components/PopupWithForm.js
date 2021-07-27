
export default function PopupWithForm(props) {

    return (
        <section className={`popup popup_${props.name}`}>
            <div className={`popup__content popup__content_${props.name}`}>
                <button type="button" aria-label="Закрыть" className={`button popup__close popup__close_${props.close}`}/>
                <form name={`form-${props.name}`} className={`popup__form popup__form_${props.name}`} novalidate></form>
                    <h2 className="popup__title">{props.title}</h2>
                    <fieldset class="popup__fieldset">
                    {props.children}
                    </fieldset>
                <button type="submit" className={`popup__button-submit popup__button-submit_${props.name}`}>{props.buttonText}</button>
            </div>
        </section>
    )
}

