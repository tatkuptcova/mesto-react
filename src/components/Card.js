import basket from '../images/basket.svg';

function Card (props) {

    const handleClick = () => {
        props.onCardClick(props.card)
    }

    return(
        <li class="elements__item">
            <button type="button" aria-label="Удалить" class="button elements__button-delete">
                <img src={basket} alt="Удалить"/>
            </button>
            <img class="elements__image" src={props.link} alt="#" onClick={handleClick}/>
            <div class="elements__info">
                <h2 class="elements__title">{props.name}</h2>
                <div class="elements__place-like">
                    <button type="button" aria-label="Нравится" class="button elements__button-like"></button>
                    <span class="elements__likes-count">{props.likes}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;