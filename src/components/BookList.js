import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = props => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [state, setState] = useState(null);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { books } = data;

  const handleBookClick = book => {
    setState(book.id);
  };

  return (
    <div>
      <ul id="book-list">
        {books.map((book, idx) => (
          <li key={idx} onClick={() => handleBookClick(book)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={state} />
    </div>
  );
};

export default BookList;
