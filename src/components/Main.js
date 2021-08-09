import React from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main(props){
  const currentUser = React.useContext(CurrentUserContext); 
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) =>{
        setCards(cards)
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
    })
  }, []);


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch(err => {
          console.log(`Ошибка: ${err}`)
      })
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== cardId);
        setCards(newCards);
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      })
  }

    return(
      <main className="container">
        <div className="content">
            <section className="profile">
              <div className="profile__avatar">
                <img onClick={props.onEditAvatar}
                className="profile__image" 
                src={currentUser.avatar} 
                alt="Профиль фото"/>
              </div>
              <div className="profile__info">
                  <h1 id="profileName" className="profile__name">{currentUser.name}</h1>
                  <button onClick={props.onEditProfile} type="button" aria-label="Редактировать" className="button profile__edit-button"/>
                  <p id="profileAbout" className="profile__about">{currentUser.about}</p>
              </div>
              <button onClick={props.onAddPlace} type="button" aria-label="Добавить картинку" className="button profile__button-add"/>
            </section>

            <section className="elements">
              <ul className="elements__catalogue">
                {cards.map((card) => (
                    <Card
                    card={card}
                    key={card._id}
                    link={card.link}
                    name={card.name}
                    likes={card.likes.length}
                    onCardClick={props.onCardClick}
                    onDeleteClick={props.onDeleteClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    />
                ))}
              </ul>
            </section>
        </div>
      </main>
    )
}

export default Main;