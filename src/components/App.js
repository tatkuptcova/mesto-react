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

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    
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

  
  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer/>
      <PopupWithForm name='delete' title='Вы уверены?' buttonText='Удалить' onClose={closeAllPopups}/>
      <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      <PopupAddCard  isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <PopupEdit isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/> 
      <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;