import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar (props){
    return (
        <PopupWithForm name="form-newAvatar" title="Обновить аватар" buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose}>
            <input 
                id="avatarLink"
                autocomplete="off"
                type="url"
                name="avatarLink"
                pattern="https?://.+"
                className="popup__input popup__input_avatar-link"
                placeholder="Ссылка на картинку"
                required
            />
            <span id="avatarLink-error" className="popup__input-error"></span> 
        </PopupWithForm>
    )
}

export default PopupEditAvatar;