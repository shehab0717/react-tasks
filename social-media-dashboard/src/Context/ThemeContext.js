import React, {useState } from "react";

const ThemeContext = React.createContext({
    theme: 'light',
    toggle: () => { }
});




function ThemeProvider({children}) {

    const [theme, setTheme] = useState('light');
    function toggle() {
        setTheme(theme == 'dark' ? 'light' : 'dark');
    }
    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeProvider };