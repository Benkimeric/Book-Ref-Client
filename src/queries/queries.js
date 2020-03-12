import { gql } from "apollo-boost";

export const getAuthorsQuery = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

export const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
