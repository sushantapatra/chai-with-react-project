import React, { createContext, useContext } from "react";
//create a context
export const ThemeContext = createContext({
	themeMode: "light",
	darkTheme: () => {},
	lightTheme: () => {},
});

//define providor
export const ThemeProvider = ThemeContext.Provider;

//create a custom hook to use context
export default function useTheme() {
	return useContext(ThemeContext);
}
