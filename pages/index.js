import { useQuery } from "@apollo/client";
import client from "../lib/apolloclient";
import { GET_COUNTRIES_USD } from "../queries/getcountries";

export default function Home({ countries }) {
  return (
    <div>
      <h1>Countries Using USD</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            <strong>{country.name} ({country.code})</strong> - 
            Language: {country.languages.length > 0 ? country.languages[0].name : "N/A"} - 
            Continent: {country.continent.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await client.query({ query: GET_COUNTRIES_USD });
    return { props: { countries: data.countries } };
  } catch (error) {
    console.error("GraphQL Fetch Error:", error);
    return { props: { countries: [] } };
  }
}
