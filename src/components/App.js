import React from 'react';
import logo from './images/logo.svg';
import '././index.css';


function App() {
  return (
    <div className="page">
      <header className="header">
            <img src={logo} alt="Лого" className="header__logo"/>
      </header>

      <main className="container">
        <div className="content">
            <section className="profile">
              <div className="profile__avatar">
                <img 
                className="profile__image" 
                src="<%=require('./images/avatar.jpg')%>" 
                alt="Профиль фото"/>
              </div>
              <div className="profile__info">
                  <h1 id="profileName" className="profile__name">Жак-Ив Кусто</h1>
                  <button type="button" aria-label="Редактировать" className="button profile__edit-button"></button>
                  <p id="profileAbout" class="profile__about">Исследователь океана</p>
              </div>
              <button type="button" aria-label="Добавить картинку" className="button profile__button-add"></button>
            </section>

            <section className="elements">
              <ul className="elements__catalogue"></ul>
            </section>
        </div>
      </main>

      
        <footer className="footer">
          <p className="footer__copyright">&copy; 2021 Mesto</p>
        </footer>

        <section className="popup popup_profile">
          <div className="popup__content popup__content_profile">
            <button type="button" aria-label="Закрыть" className="button popup__close popup__close_profile"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="edit" className="popup__form popup__form_profile" action="#" method="POST" novalidate>
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
            </form>
          </div>
        </section>

        <section className="popup popup_avatar">
          <div className="popup__content popup__content_avatar">
            <button type="button" aria-label="Закрыть" className="button popup__close popup__close_avatar"></button>
            <form name="form-newAvatar" className="popup__form popup__form_avatar" novalidate>
              <h3 className="popup__title">Обновить аватар</h3>
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
            </form>
            
          </div>
        </section>
      
        <section className="popup popup_card">
          <div className="popup__content popup__content_add">
            <button type="button" aria-label="Закрыть" className="button popup__close popup__close_add"></button>
            <h2 className="popup__title"> Новое место</h2>
            <form name="add" className="popup__form popup__form_add" action="#" method="POST" novalidate/>
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
            <form/>
          </div>
        </section>

        <section className="popup popup_pic">
          <div className="popup__container">
            <img className="popup__image" src="#" alt="#"/>
            <button type="button" aria-label="Закрыть" className="button popup__close popup__close_image"></button>
            <p className="popup__caption"></p>
          </div>
        </section>

        <section className="popup popup_confirm">
          <div className="popup__content popup__content_confirm">
            <button type="button" aria-label="Закрыть" className="button popup__close popup__close_confirm"></button>
            <form className="popup__form popup__form_confirm" novalidate>
              <h3 className="popup__title">Вы уверены?</h3>
              <button type="submit" className="popup__button-submit popup__button-submit_confirm">Да</button>
            </form>
          </div>
        </section>
      </div>
  );
}

export default App;
