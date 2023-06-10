import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import PopulateDate from "./PopulateData/PopulateData";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <>
      <ApolloProvider client={client}>
        <h1>App</h1>
        <PopulateDate />
      </ApolloProvider>
    </>
  );
}

export default App;
