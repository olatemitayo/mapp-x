import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Dispatch, SetStateAction, useState, createContext } from "react";
import { ModalsProvider } from "@mantine/modals";

export interface UserDetails {
  first_name?: string;
  last_name?: string;
  profile_picture?: string;
  role?: string;
  designation?: string;
  email?: string;
  location?: string;
  phone_number?: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  role?: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  designation: string;
  location: string;
}

export type ContextType = {
  user: UserDetails | null;
  setUser: Dispatch<SetStateAction<UserDetails | null>>;
};

export const AuthContext = createContext<ContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserDetails | null>(null);

  let storeData = {
    user,
    setUser,
  };
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <AuthContext.Provider value={storeData}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </ModalsProvider>
    </MantineProvider>
  );
}
