import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//css
const books = [
  {
    img: "https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg",
    title: "A very good picture",
    Author: "Sahil Duhan",
  },
  {
    img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    title: "A Man",
    Author: "Sahil Duhan",
  },
  {
    img: "https://images.pexels.com/photos/6467928/pexels-photo-6467928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "A Lion",
    Author: "Mr Duhan",
  },
];

const Book = (props) => {
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
const BookList = (props) => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
