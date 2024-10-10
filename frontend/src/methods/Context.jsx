import {createContext, useContext, useState} from "react"

const ThemeContext = createContext()

const Toolbar = () => {
	const theme = useContext(ThemeContext)

	return (
		<div style={{background: theme === "light" ? "#fff" : "#333"}}>
			Toolbar Theme: {theme}
		</div>
	)
}

const Context = () => {
	const [theme, setTheme] = useState("light")

	return (
		<ThemeContext.Provider value={theme}>
			<Toolbar />
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toogle Theme
			</button>
		</ThemeContext.Provider>
	)
}

export default Context
