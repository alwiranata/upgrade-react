import React from "react"

export default class Lifecycle extends React.Component {
	componentDidMount() {
		console.log("Component has Mounted")
	}
	componentDidUpdate() {
		console.log("Component has Update")
	}
	componentWillUnmount() {
		console.log("Component has Unmounted")
	}

	render() {
		return <div>Hello World</div>
	}
}
