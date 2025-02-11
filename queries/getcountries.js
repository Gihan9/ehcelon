import { gql } from "@apollo/client";

export const GET_COUNTRIES_USD = gql`
  query {
    countries(filter: { currency: { eq: "USD" } }) {
      name
      code
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;
