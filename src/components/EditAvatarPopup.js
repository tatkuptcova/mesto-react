import React from 'react';

import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup (props){

    const ref = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar(ref.current.value);
        ref.current.value = "";
    }


    return (
        <PopupWithForm name="form-newAvatar" title="Обновить аватар" buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input 
                ref= {ref}
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