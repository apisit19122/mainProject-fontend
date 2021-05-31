import gql from "graphql-tag";

export default gql`
  mutation($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      user {
        id
        username
        password
        firstName
        lastName
      }
      token
    }
  }
`;
