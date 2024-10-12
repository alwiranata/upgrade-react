import {useState} from "react"
import Child from "./Child"

const Parrent = () => {
	const [data] = useState({name: "Aldo", old: "18"})
	return (
		<div>
			<Child data={data} />
		</div>
	)
}

export default Parrent
