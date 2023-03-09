import './../styles/PricingSection.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'

const PricingSection = ({ list }) => {
	const [pvTotal, setPvTotal] = useState(0)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		let pvAux = 0
		let totalAux = 0
		list.forEach(({ pvValue, wholesalePrice, qty }) => {
			pvAux = (pvAux + pvValue) * qty
			totalAux = (totalAux + wholesalePrice) * qty
		})
		setPvTotal(pvAux.toFixed(0))
		setTotal(totalAux.toFixed(2))
	}, [list])

	return (
		<Row className='pricing'>
			<Col>
				<span className='total-label'>Item Total: </span>
				<span className='total-value'>${total} </span>
				<span className='totalpv-label'>PV Total: </span>
				<span className='totalpv-value'>{pvTotal}</span>
			</Col>
		</Row>
	)
}

export default PricingSection
