import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GRAPHQL_URL } from "./constant";

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Banner = styled.span`
  font-weight: bold;
  color: white;
  margin: 10px;
  position: relative;
  top: 25px;
  font-size: 30px;

`;

ReactDOM.render(
    <ApolloProvider client={client}>
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "100px",
          background: "#4d4d4d",
        }}
      >
        <Banner> SovTech Challenge</Banner>
      </div>
      <Container>
        <App />
      </Container>
    </ApolloProvider>
    ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
