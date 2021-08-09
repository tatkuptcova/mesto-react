import React from 'react';
import basket from '../images/basket.svg';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Card (props) {
    
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (`button elements__button-delete ${isOwn ? 'button elements__button-delete': ''}`);
    
    const isLiked = props.card.likes.some(i => i._id === currentUser._id); 
    const cardLikeButtonClassName = (`button elements__button-like ${isLiked ? 'button elements__button-like_active' : ''}`);
    

    const handleClick = () => {
        props.onCardClick(props.card)
    }

    const handleLikeClick = () => {
        props.onCardLike(props.card)
    }
    
    const handleDeleteClick = () => {
        props.onCardDelete(props.card._id)
    }

    return(
        <li className="elements__item">
            <button type="button" aria-label="Удалить" className={cardDeleteButtonClassName} onClick={handleDeleteClick}>
                <img src={basket} alt="Удалить"/>
            </button>
            <img className="elements__image" src={props.link} alt="#" onClick={handleClick}/>
            <div className="elements__info">
                <h2 className="elements__title">{props.name}</h2>
                <div className="elements__place-like">
                    <button type="button" aria-label="Нравится" className={cardLikeButtonClassName} onClick={handleLikeClick}/>
                    <span className="elements__likes-count">{props.likes}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;