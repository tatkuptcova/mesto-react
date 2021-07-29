import basket from '../images/basket.svg';

function Card (props) {

    const handleClick = () => {
        props.onCardClick(props.card)
    }

    return(
        <li className="elements__item">
            <button type="button" aria-label="Удалить" className="button elements__button-delete">
                <img src={basket} alt="Удалить"/>
            </button>
            <img className="elements__image" src={props.link} alt="#" onClick={handleClick}/>
            <div className="elements__info">
                <h2 className="elements__title">{props.name}</h2>
                <div className="elements__place-like">
                    <button type="button" aria-label="Нравится" className="button elements__button-like"/>
                    <span className="elements__likes-count">{props.likes}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;