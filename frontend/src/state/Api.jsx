import {createContext, useState, useContext} from "react"
import PropTypes from "prop-types"
// Membuat Context
const DataContext = createContext()

// Membuat provider untuk menyediakan state global
const DataProvider = ({children}) => {
	const [data] = useState("Hello from Context!")

	return (
		<DataContext.Provider value={{data}}>
			{children}
		</DataContext.Provider>
	)
}

DataProvider.propTypes = {
	children: PropTypes.node.isRequired, // Menandakan bahwa children bisa berupa elemen React atau teks
}

// Menggunakan state global di komponen anak
const DisplayData = () => {
	const {data} = useContext(DataContext) // Mengambil data dari context
	return <p>{data}</p>
}

// Root component
const Api = () => {
	return (
		<DataProvider>
			<DisplayData />
		</DataProvider>
	)
}

export default Api
