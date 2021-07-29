import PopupWithForm from "./PopupWithForm";

function PopupEdit(props) {
    return(
        <PopupWithForm name="form-edit" title="Редактировать профиль" buttonText="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose}>
            <input
                type="text"
                id="name-input"
                className="popup__input popup__input_edit-name"
                name="name"
                value=""
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                pattern="[A-Za-zА-ЯЁа-яё\s-]{2,40}"
                required
            />
            <span id="name-input-error" className="popup__input-error"/>
            <input
                type="text"
                id="about-input"
                className="popup__input popup__input_edit-about"
                name="about"
                value=""
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                pattern=".{2,200}"
                required
            />
            <span id="about-input-error" className="popup__input-error"/>
        </PopupWithForm>
    )
}

export default PopupEdit;