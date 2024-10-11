import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

const Home = () => <h2>Home Page</h2>
const About = () => <h2> About Page</h2>

const Routing = () => {
	return (
		<Router>
			<nav>
				<Link to='/'>Home Link</Link>
				<Link to='/about'>About Link</Link>
			</nav>

			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
			</Routes>
		</Router>
	)
}

export default Routing
