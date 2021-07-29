import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import AddCardPopup from './AddCardPopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import '../index.css';


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    
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
      setIsImagePopupOpen(true);
      setSelectedCard(card)
    }
  
  return (
    <div className="page">
      <Header/>
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm name='delete' title='Вы уверены?' buttonText='Удалить' onClose={closeAllPopups}/>
      <ImagePopup 
        isOpen={isImagePopupOpen} 
        onClose={closeAllPopups} 
        card={selectedCard} 
        link={selectedCard.link} 
        name={selectedCard.name}/>
      <AddCardPopup  isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/> 
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;