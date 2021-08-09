import React from 'react';
import {CurrentUserContext} from '../context/CurrentUserContext.js'
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup (props) {

    const currentUser = React.useContext(CurrentUserContext);

    const[name, setName] = React.useState('');
    const[description, setDescription] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return(
        <PopupWithForm name="form-edit" onSubmit={handleSubmit} title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <input
                type="text"
                id="name-input"
                className="popup__input popup__input_edit-name"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                pattern="[A-Za-zА-ЯЁа-яё\s-]{2,40}"
                value={name || ''} 
                onChange={handleNameChange}
                required
            />
            <span id="name-input-error" className="popup__input-error"/>
            <input
                type="text"
                id="about-input"
                className="popup__input popup__input_edit-about"
                name="about"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                pattern=".{2,200}"
                value={description || ''} 
                onChange={handleDescriptionChange}
                required
            />
            <span id="about-input-error" className="popup__input-error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup;