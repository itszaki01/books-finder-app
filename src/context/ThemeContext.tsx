import { ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type ThemeContextProps = {
    theme: string;
    setTheme?: React.Dispatch<SetStateAction<string>>;
    handleThemeChangeClick(theme: string): void;
};
const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

type ThemeContextProviderProps = {
    children: ReactNode;
};
export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<string>(localStorage.getItem("themeMode") != null ? localStorage.getItem("themeMode") || "": "light");

    //handleThemeChangeClick
    function handleThemeChangeClick(theme: string) {
        setTheme(theme);
    }

    //Save Effect in LocalStorage
    useEffect(() => {
        localStorage.setItem("themeMode", theme);
        document.body.className = theme === "dark" ? "dark-theme" : "";
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, handleThemeChangeClick }}>{children}</ThemeContext.Provider>;
}

//Custom Hook To Use
// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext);
