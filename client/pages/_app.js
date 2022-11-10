import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import '../styles/globals.css'
import { UserContext } from '../lib/UserContext';
import { useState, useEffect } from 'react';
import { Magic } from 'magic-sdk'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});



function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({});
  const UserAppContext = [user, setUser];
  useEffect(() => {

    async function magicUser() {
      setUser({ loading: true });

      try {
        const magic = new Magic("pk_live_AB43E76F9BEB7E71" || "")
        const isLoggedIn = await magic.user.isLoggedIn();
        console.log(isLoggedIn); // => `true` or `false`
        const userData = await magic.user.getMetadata();
        setUser(userData);
      } catch {
        // Handle errors if required!
        setUser({ user: null });
      }

    }

    magicUser();


  }, []);

  return <ApolloProvider client={client}>
    <UserContext.Provider value={UserAppContext}>
      <Component {...pageProps} />
    </UserContext.Provider>
  </ApolloProvider>
}

export default MyApp
