import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { getAuthorsQuery } from "../queries/queries";

const AddBookList = props => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { authors } = data;

  console.log("the authors", authors);

  return (
    <div>
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
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
