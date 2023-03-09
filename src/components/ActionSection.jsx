import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../reducers/counterReducer'

const ActionSection = ({ list }) => {
	const dispatch = useDispatch()

	const handleAddAll = () => {
		const qty = list.reduce((prev, { qty }) => Number(prev) + Number(qty), 0)
		dispatch(incrementByAmount(qty))
	}

	return (
		<Row className='wishlist__actions'>
			<Col>
				<button className='btn btn-primary' onClick={handleAddAll}>
					Add all to bag
				</button>
			</Col>
			<Col>
				<button
					className='btn btn-info'
					onClick={(event) => {
						event.target.className = 'btn btn-info removed'
					}}
				>
					A - Z
				</button>
			</Col>
		</Row>
	)
}

export default ActionSection
