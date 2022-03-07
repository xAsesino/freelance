import { createContext, useState, useContext } from "react";

const LangContext = createContext();

export const useLang = () => {
    return useContext(LangContext);
}

export const LangProvider = ({ children }) => {

    const [lang, setLang] = useState("fr");

    const toggleLang = () => {
        setLang(lang === "fr" ? "en" : "fr");
    }

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LangContext.Provider>
    )

}