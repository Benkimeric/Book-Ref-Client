import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import BookList from "./components/BookList";
import AddBookList from "./components/addBook";

// apollo setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
