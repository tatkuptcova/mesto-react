import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup (props){
    return (
        <PopupWithForm name="form-newAvatar" title="Обновить аватар" buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose}>
            <input 
                id="avatarLink"
                autoComplete="off"
                type="url"
                name="avatarLink"
                pattern="https?://.+"
                className="popup__input popup__input_avatar-link"
                placeholder="Ссылка на картинку"
                required
            />
            <span id="avatarLink-error" className="popup__input-error"/> 
        </PopupWithForm>
    )
}

export default EditAvatarPopup;