import {createContext, useContext, useState} from "react"

const ThemeContext = createContext()

const Context = () => {
	const [theme, setTheme] = useState("light")
	return (
		<ThemeContext.Provider value={theme}>
			<Toolbar />
			<button onClick={() => setTheme(theme === "light" ? "light" : "dark")}>
				Toogle Theme
			</button>
		</ThemeContext.Provider>
	)
}

const Toolbar = () => {
	const theme = useContext(ThemeContext)

	return (
		<div style={{background: theme === "light" ? "#fff" : "#333"}}>
			Toolbar {theme}
		</div>
	)
}
export default Context
