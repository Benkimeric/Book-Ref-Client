import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { getBookQuery } from "../queries/queries";

const BookDetails = props => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: props.bookId }
  });

  if (loading) return <p id="book-details">Loading...</p>;
  if (error) return <p id="book-details">Error :(</p>;

  const { book } = data;
  const displayBook = () => {
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul className="other-books">
            {book.author.books.map(book => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected</div>;
    }
  };
  return (
    <div id="book-details">
      <p>Output book details here </p>
      {displayBook()}
    </div>
  );
};

export default BookDetails;
