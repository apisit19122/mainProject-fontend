import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "apollo-link-context";
import store from "../store";
import { currentUrl } from "./mainUrl";

const httpLink = new HttpLink({
  uri: `${currentUrl}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const { user } = store.getState();
  const token = user.token || null;
  return {
    headers: {
      ...headers,
      "x-token": token,
    },
  };
});

export const client = new ApolloClient({
  link: from([authLink as any, httpLink]),
  cache: new InMemoryCache(),
});
