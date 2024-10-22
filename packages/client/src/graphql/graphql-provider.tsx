import { ReactNode, useEffect, useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useSettings } from "@context/setting.context";

export interface GraphqlProviderProps {
  children: ReactNode;
}

export const GraphqlProvider = ({ children }: GraphqlProviderProps) => {
  const { settings } = useSettings();
  const [httpLink, setHttpLink] = useState<HttpLink>();

  useEffect(() => {
    if (settings?.VITE_BACKEND_URL) {
      setHttpLink(
        new HttpLink({
          uri: settings.VITE_BACKEND_URL,
          fetch: fetch,
        }),
      );
    }
  }, [settings]);

  if (!httpLink) {
    return "loading";
  }

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache({
      resultCaching: true,
    }),
    link: from([httpLink]),
    defaultOptions: {
      query: {
        errorPolicy: "ignore",
        returnPartialData: true,
      },
    },
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
