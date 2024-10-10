const Greeting = (Props) => {
	return <h1>Hello {Props.name}</h1>
}

const App = () => {
	return <Greeting />
}
const Props = () => {
	return <App />
}

Greeting.defaultProps = {
	name: "Guest",
}

export default Props
