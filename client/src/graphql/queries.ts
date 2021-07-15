import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query getPeople($page: Int!) {
    getPeople(page: $page) {
      name
      gender
      mass
      height
      homeworld
    }
  }
`;

export const GET_PERSON = gql`
  query getPerson($name: String!) {
    getPerson(name: $name) {
      name
      gender
      mass
      height
      homeworld
    }
  }
`;

export const GET_COUNT = gql`
  {
    query
    getCount
  }
`;
