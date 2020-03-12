import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = props => {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { books } = data;

  return (
    <div>
      <ul id="book-list">
        {books.map((book, idx) => (
          <li key={idx}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
