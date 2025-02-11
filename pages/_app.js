import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloclient";
import "../styles/globals.css"; 

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
