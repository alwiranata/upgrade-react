import {useState} from "react"

const Form = () => {
	const [name, setName] = useState("Aldo")

	const handleSubmit = (e) => {
		e.preventDefault()
		alert(`Hello ${name}`)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name :
					<input
						type='text'
						value={name}
						onChange={(n) => setName(n.target.value)}
					/>
				</label>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Form
