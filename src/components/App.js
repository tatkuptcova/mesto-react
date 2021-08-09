import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import AddCardPopup from './AddCardPopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import { CurrentUserContext } from '../context/CurrentUserContext';
import '../index.css';
import api from '../utils/api';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState('');
    
  React.useEffect(() => {
    api.getUserInfo()
      .then(user => {
        setCurrentUser(user);
      })
      .catch(err => {
        console.log (`Ошибка: ${err}`)
      });
  }, []);

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

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    })
  },[])

  function overlayClick(e) {
      if (e.classList.contains('popup')){
        closeAllPopups()
      }
  }

  function handleUpdateUser(name, about) {
    api.changeUserInfo(name, about)
    .then((user) => {
      setCurrentUser(user)
      closeAllPopups();
    })
    .catch(err => {
      console.log (`Ошибка: ${err}`)
    });
  }
  
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header/>
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick}
        />
        <Footer/>
        <PopupWithForm name='delete' title='Вы уверены?' buttonText='Удалить' onClose={closeAllPopups} overlay={overlayClick}/>
        <ImagePopup 
          isOpen={isImagePopupOpen} 
          onClose={closeAllPopups} 
          card={selectedCard} 
          link={selectedCard.link} 
          name={selectedCard.name}
          overlay={overlayClick}
        />
        <AddCardPopup  isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} overlay={overlayClick}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} overlay={overlayClick} onUpdateUser={handleUpdateUser}/> 
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} overlay={overlayClick}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;