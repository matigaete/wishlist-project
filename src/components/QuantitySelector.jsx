import './../styles/QuantitySelector.scss'
import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const QuantitySelector = ({ onChange, qty }) => {
	console.log('quantity')
	const [count, setCount] = useState(qty)

	const changeQty = (value) => {
		console.log('changeQty')
		onChange(value > 1 ? value : 1)
		setCount(value > 1 ? value : 1)
	}

	return (
		<Stack className='quantity--selector text-center' direction='horizontal'>
			<Col
				xs={4}
				className='quantity--minus'
				onClick={() => changeQty(count - 1)}
			>
				<img src='src/assets/icons/minus.svg'></img>
			</Col>
			<Col xs={4} className='text-center'>
				<input
					className='quantity--input text-center'
					value={count}
					onChange={(event) => changeQty(event.target.value)}
				></input>
			</Col>
			<Col
				xs={4}
				className='quantity--plus'
				onClick={() => changeQty(count + 1)}
			>
				<img src='src/assets/icons/plus.svg'></img>
			</Col>
		</Stack>
	)
}

export default QuantitySelector
