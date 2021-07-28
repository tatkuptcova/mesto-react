import React from "react";
import api from "../utils/api";

 function Main(props){
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo () 
    .then(res => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
    })
    .catch(err => {
      console.log (`Ошибка: ${err}`)
    })
  })
  
    return(
      <main className="container">
        <div className="content">
            <section className="profile">
              <div className="profile__avatar">
                <img onClick={props.onEditAvatar}
                className="profile__image" 
                src={userAvatar} 
                alt="Профиль фото"/>
              </div>
              <div className="profile__info">
                  <h1 id="profileName" className="profile__name">{userName}</h1>
                  <button onClick={props.onEditProfile} type="button" aria-label="Редактировать" className="button profile__edit-button"></button>
                  <p id="profileAbout" class="profile__about">{userDescription}</p>
              </div>
              <button onClick={props.onAddPlace}  type="button" aria-label="Добавить картинку" className="button profile__button-add"></button>
            </section>

            <section className="elements">
              <ul className="elements__catalogue"></ul>
            </section>
        </div>
      </main>
    )
}

export default Main;