const ArrayMethod = () => {
	const lists = ["Apple", "Watermelon", "Banana"]
	const filteredLists = lists.filter((item) => item.startsWith("W"))
	return (
		<ul>
			{filteredLists.map((filteredList, index) => (
				<li key={index}>{filteredList}</li>
			))}
		</ul>
	)
}

export default ArrayMethod
