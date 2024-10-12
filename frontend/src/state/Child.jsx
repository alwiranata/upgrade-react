import PropTypes from "prop-types"

const Child = ({data}) => {
	return (
		<div>
			<h1>ChildComponent</h1>
			<p>{data.name}</p>
			<p>{data.old}</p>
		</div>
	)
}

Child.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		old: PropTypes.string.isRequired,
	}),
}

export default Child
