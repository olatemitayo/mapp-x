import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  useEffect,
} from "react";

export interface UserDetails {
  first_name: string;
  last_name: string;
  img: string;
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
      <AuthContext.Provider value={storeData}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </MantineProvider>
  );
}
