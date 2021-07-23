function Main () {
    return(
        <main className="container">
        <div className="content">
            <section className="profile">
              <div className="profile__avatar">
                <img 
                className="profile__image" 
                src="<%=require('./images/avatar.jpg')%>" 
                alt="Профиль фото"/>
              </div>
              <div className="profile__info">
                  <h1 id="profileName" className="profile__name">Жак-Ив Кусто</h1>
                  <button type="button" aria-label="Редактировать" className="button profile__edit-button"></button>
                  <p id="profileAbout" class="profile__about">Исследователь океана</p>
              </div>
              <button type="button" aria-label="Добавить картинку" className="button profile__button-add"></button>
            </section>

            <section className="elements">
              <ul className="elements__catalogue"></ul>
            </section>
        </div>
      </main>
    )
}

export default Main