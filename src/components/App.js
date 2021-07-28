import React, {useState} from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import PopupAddCard from './PopupAddCard';
import PopupEdit from './PopupEdit';
import PopupEditAvatar from './PopupEditAvatar';
import '../index.css';


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
    };

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
    };

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true)
    };

    const closeAllPopups = () => {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsImagePopupOpen(false);
    };

    const handleCardClick = (card) => {
      setSelectedCard(card);
      setIsImagePopupOpen(true);
  };

  
  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm name='delete' title='Вы уверены?' buttonText='Удалить' onClose={closeAllPopups}/>
      <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}  name={selectedCard.name} link={selectedCard.link}/>
      <PopupAddCard  isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <PopupEdit isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/> 
      <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>

    </div>
  );
}

export default App;