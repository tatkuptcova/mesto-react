import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props){
  const currentUser = React.useContext(CurrentUserContext); 
 
  return(
    <main className="container">
      <div className="content">
        <section className="profile">
          <div className="profile__avatar">
            <img onClick={props.onEditAvatar}
              className="profile__image" 
              src={currentUser ? currentUser.avatar : null} 
              alt="Профиль фото"/>
          </div>
          <div className="profile__info">
            <h1 id="profileName" className="profile__name">{currentUser ? currentUser.name : null}</h1>
            <button onClick={props.onEditProfile} type="button" aria-label="Редактировать" className="button profile__edit-button"/>
            <p id="profileAbout" className="profile__about">{currentUser ? currentUser.about : null}</p>
          </div>
          <button onClick={props.onAddPlace} type="button" aria-label="Добавить картинку" className="button profile__button-add"/>
        </section>

        <section className="elements">
          <ul className="elements__catalogue">
            {props.cards.map((card) => (
              <Card
                card={card}
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes.length}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike} 
                onCardDelete={props.onCardDelete}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Main;