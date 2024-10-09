const Classes = () => {
	class Car {
		constructor(name, year) {
			this.brand = name
			this.years = year
		}

		getCar() {
			return ` I have a ${this.brand} ${this.years}`
		}
	}

	class Model extends Car {
		constructor(name, years, mod) {
			super(name, years)
			this.model = mod
		}

		getModel() {
			return `${this.getCar()} it is a ${this.model}`
		}
	}

	const myCar = new Model("TOYOTA", "1999", "SUZUKI")
	return (
		<div className='App'>
			<h1> {myCar.getModel()}</h1>
		</div>
	)
}

export default Classes
