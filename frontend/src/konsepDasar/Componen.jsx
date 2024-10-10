import {useState, useEffect} from "react"
const Componen = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log(`Count updated to: ${count}`)
	}, [count])

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>button</button>
		</div>
	)
}

export default Componen
