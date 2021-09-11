export const Book = (props) => {
  const { img, title, Author } = props;
  const ClickHandler = () => {
    alert("Warning Gentlemen");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} height="250" alt=""></img>
      <h2>{title}</h2>
      <h1>{Author}</h1>
      <button type="button" onClick={ClickHandler}>
        {" "}
        Random
      </button>
    </article>
  );
};
//  import React from 'react'

//  const Book = () => {
//      return (
//          <div>

//          </div>
//      )
//  }

//  export default Book
