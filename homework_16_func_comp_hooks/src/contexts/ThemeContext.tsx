import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export interface ThemeContextState {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<Partial<ThemeContextState>>({});

const ThemeContextProvider = ({ children }: Props) => {
  const stat: string = localStorage.getItem("StatusTheme")
    ? (localStorage.getItem("StatusTheme") as string)
    : "0";
  const [darkTheme, setDarkTheme] = useState(stat === "1");

  const toggleTheme = (): void => {
    const st: boolean = !darkTheme;
    setDarkTheme(st);
    st
      ? localStorage.setItem("StatusTheme", "1")
      : localStorage.setItem("StatusTheme", "0");
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
