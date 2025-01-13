import React from 'react'
import './reviews.module.scss'

export default function Reviews() {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <div className="header__elems">
            <div className="header__item">
              <a href="venice.html">Venice</a>
            </div>
            <div className="header__item">
              <a href="warsaw.html">Warsaw</a>
            </div>
          </div>
        </div>
      </header>
      <main className="form">
        <div className="form__container">
          <div className="form__form">
            <form method="post" id="form" />
            <label for="title">Name of attraction: </label>
            <input type="text" name="title" id="title" />
            <label for="firstname">Firstname: </label>
            <input type="text" name="firstname" id="firstname" required />
            <label for="Lastname">Lastname: </label>
            <input type="text" name="lastname" id="lastname" required />
            <label for="email">Mail: </label>
            <input type="email" name="email" id="email" />
            <label for="comment">Comment: </label>
            <textarea name="comment" id="comment" required />
            <input type="submit" value="Send.." id="submit" />
          </div>
        </div>
      </main>
    </div>
  )
}
