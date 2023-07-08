import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import type { AppProps } from "next/app";

export interface UserDetails {
  user: User;
  token: string;
  number_of_notifications: number;
  number_of_messages: number;
  facebook: null;
  twitter: null;
  apple: null;
}

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  photo_url: string;
  get_cover_image: string;
  is_online: boolean;
  bio: string;
  town: string;
  country: string;
  is_private: boolean;
  is_following: boolean;
  location: null;
}

export type ContextType = {
  user: UserDetails | null;
  setUser: Dispatch<SetStateAction<UserDetails | null>>;
  company: string;
  photo_url: string;
};

export const AuthContext = createContext<ContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserDetails | null>(null);

  const photo_url = "AFEX";

  let storeData = {
    user,
    setUser,
    company,
    photo_url,
  };
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthContext.Provider value={storeData}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </MantineProvider>
  );
}
