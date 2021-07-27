import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';


function App() {

  
  const handleEditAvatarClick = () => {
    document.querySelector('.popup_avatar').classList.add('popup_opened');
  };

  const handleEditProfileClick = () => {
    document.querySelector('.popup_profile').classList.add('popup_opened');
  };

  const handleAddPlaceClick = () => {
      document.querySelector('.popup_card').classList.add('popup_opened');
  };

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer/>
      <PopupWithForm name='delete' title='Вы уверены?' buttonText='Удалить'/>
      <ImagePopup/>

        <section className="popup popup_profile">
          <div className="popup__content popup__content_profile">
            <button type="button" aria-label="Закрыть" className="button popup__close popup__close_profile"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="form-edit" className="popup__form popup__form_profile" action="#" method="POST" novalidate>
              <fieldset class="popup__fieldset">
                <input
                  type="text"
                  id="name-input"
                  className="popup__input popup__input_edit-name"
                  name="name"
                  value=""
                  placeholder="Имя"
                  minlength="2"
                  maxlength="40"
                  pattern="[A-Za-zА-ЯЁа-яё\s-]{2,40}"
                  required
                />
                <span id="name-input-error" className="popup__input-error"></span>
                <input
                  type="text"
                  id="about-input"
                  className="popup__input popup__input_edit-about"
                  name="about"
                  value=""
                  placeholder="О себе"
                  minlength="2"
                  maxlength="200"
                  pattern=".{2,200}"
                  required
                />
                <span id="about-input-error" className="popup__input-error"></span>
                <button type="submit" className="popup__button-submit popup__button-submit_profile">Сохранить</button>
              </fieldset>  
            </form>
          </div>
        </section>

        <section className="popup popup_avatar">
          <div className="popup__content popup__content_avatar">
            <button type="button" aria-label="Закрыть" className="button popup__close popup__close_avatar"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form name="form-newAvatar" className="popup__form popup__form_avatar" novalidate>
              <fieldset class="popup__fieldset">
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
                <button type="submit" className="popup__button-submit popup__button-submit_avatar">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </section>
      
        <section className="popup popup_card">
          <div className="popup__content popup__content_add">
            <button type="button" aria-label="Закрыть" className="button popup__close popup__close_add"></button>
            <h2 className="popup__title"> Новое место</h2>
            <form name="form-add" className="popup__form popup__form_add" action="#" method="POST" novalidate/>
            <fieldset class="popup__fieldset">
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
                <button type="submit" className="popup__button-submit popup__button-submit_add">Создать</button>
              </fieldset>  
            <form/>
          </div>
        </section>

       

        <section className="popup popup_confirm">
          <div className="popup__content popup__content_confirm">
          <form name="form-confirm" className="popup__form popup__form_confirm" novalidate>
            <fieldset class="popup__fieldset">
              <button type="button" aria-label="Закрыть" className="button popup__close popup__close_confirm"></button>
              <h2 className="popup__title">Вы уверены?</h2>
            </fieldset>
              <button type="submit" className="popup__button-submit popup__button-submit_confirm">Да</button>
          </form>
          </div>
        </section>
      </div>
  );
}

export default App;