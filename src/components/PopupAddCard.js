import PopupWithForm from "./PopupWithForm";

export default function PopupAddCard(props) {
    return (
        <PopupWithForm  name="form-add"  title="Новое место" buttonText='Создать' isOpen={props.isOpen}
            onClose={props.onClose}>
                <input
                  type="text"
                  id="nameplace-input"
                  className="popup__input popup__input_add-title"
                  name="name"
                  value=""
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                  pattern=".{2,30}"
                  required
                />
                <span id="nameplace-input-error" className="popup__input-error"></span>
                <input
                  type="url"
                  id="link-input"
                  className="popup__input popup__input_add-link"
                  name="link"
                  value=""
                  placeholder="Ссылка на картинку"
                  required
                />
                <span id="link-input-error" className="popup__input-error"></span>
        </PopupWithForm>        
    )
}