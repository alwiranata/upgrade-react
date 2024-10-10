import {useState, useEffect} from "react"

const Hooks = () => {
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1)
		}, 2000)

		return () => clearInterval(interval)
	}, [])
	return <div>{seconds}</div>
}

export default Hooks
