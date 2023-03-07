import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WishlistItem from '../components/WishlistItem'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../reducers/counterReducer'
import PricingSection from '../components/PricingSection'

const WishlistPage = () => {
	const [list, setList] = useState([])

	const dispatch = useDispatch()

	useEffect(() => {
		fetch('http://localhost:3000/products')
			.then((res) => res.json())
			.then((result) => {
				let pvAux = 0
				let totalAux = 0
				result.forEach((item) => {
					pvAux += item.pvValue
					totalAux += item.wholesalePrice
				})
				const list = result.map((item) => {
					return {
						...item,
						qty: 1,
					}
				})
				setList(list)
				// setPvTotal(pvAux.toFixed(0))
				// setTotal(totalAux.toFixed(2))
			})
	}, [])

	const handleRemove = (code) => {
		const newList = list.filter((item) => item.code !== code)
		setList(newList)
	}

	const handleAddAll = () => {
		const qty = list.reduce((prev, { qty }) => Number(prev) + Number(qty), 0)
		dispatch(incrementByAmount(qty))
	}

	const handleRefresh = (code, newQty) => {
		const id = list.findIndex((item) => item.code === code)
		const newList = [...list]
		newList[id].qty = newQty
		setList(newList)
	}

	return (
		<Container>
			<Row>
				<Col className='title'>
					<h1>My wishlist</h1>
				</Col>
			</Row>
			<PricingSection list={list} />
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
			<Row>
				<Stack className='wishlist--list' gap={3}>
					{list.map((item) => {
						return (
							<WishlistItem
								key={item.code}
								item={item}
								handleRemove={handleRemove}
								handleRefresh={handleRefresh}
							/>
						)
					})}
				</Stack>
			</Row>
		</Container>
	)
}

export default WishlistPage
