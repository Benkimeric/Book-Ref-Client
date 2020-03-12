import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation
} from "../queries/queries";

const AddBookList = props => {
  const initialState = {
    name: "",
    authorId: "",
    genre: ""
  };

  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBook();
  };

  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation, {
    variables: {
      name: state.name,
      authorId: state.authorId,
      genre: state.genre
    },
    refetchQueries: [{ query: getBooksQuery }]
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { authors } = data;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Book name:</label>
          <input id="name" onChange={handleChange} type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input id="genre" onChange={handleChange} type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select id="authorId" onChange={handleChange}>
            <option>Select author</option>
            {authors.map(author => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default AddBookList;
