import './../styles/WishlistItem.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import QuantitySelector from './QuantitySelector'
import Popup from './Popup'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../reducers/counterReducer'

const WishlistItem = ({ item, handleRemove, handleRefresh }) => {
	const [showBag, setShowBag] = useState(false)
	const [showRemove, setShowRemove] = useState(false)
	const [actualCount, setActualCount] = useState(1)
	const {
		code,
		pvValue,
		wholesalePrice,
		retailPrice,
		productName,
		imgUrl,
		qty,
	} = item
	const dispatch = useDispatch()

	const handleChangeQty = (value) => {
		setActualCount(value)
		handleRefresh(code, value)
	}

	const handleAddToBag = () => {
		dispatch(incrementByAmount(actualCount))
		setShowBag(true)
		setTimeout(() => {
			setShowBag(false)
		}, 2000)
	}

	const handleRemoveItem = (event) => {
		setShowRemove(true)
		setTimeout(() => {
			setShowRemove(false)
			handleRemove(code)
		}, 1000)
	}

	return (
		<Row className={`wishlist--item ${showRemove ? 'removed' : ''}`}>
			<Col xs={12} md={2} lg={1} className='text-center'>
				<img src='src/assets/icons/heart.svg' alt='heart' />
			</Col>
			<Col xs={12} md={2} lg={1}>
				<img src={imgUrl} />
			</Col>
			<Col xs={12} md={4} lg={2}>
				<span className='item--name'>{productName}</span>
			</Col>
			<Col xs={12} md={2} lg={1}>
				<span className='item--pv'>{pvValue}pv</span>
			</Col>
			<Col xs={12} md={2} lg={2}>
				<Stack className='pricing-section' gap={1}>
					<span className='item--retail'>Retail: ${retailPrice}</span>
					<span className='item--wholesale'>Wholesale: ${wholesalePrice}</span>
				</Stack>
			</Col>
			<Col xs={12} lg={2} xl={1} className='p-3 p-lg-0'>
				<QuantitySelector onChange={handleChangeQty} qty={qty} />
			</Col>
			<Col xs={6} lg={2} className='text-center py-3 py-lg-0'>
				<Button variant='primary' className='w-75' onClick={handleAddToBag}>
					Add to bag
				</Button>
			</Col>
			<Col xs={6} lg={1} className='text-center py-3 py-lg-0'>
				<Button variant='secondary' className='w-75' onClick={handleRemoveItem}>
					Remove
				</Button>
			</Col>
			<Popup show={showBag} icon='bag'>
				Added to bag
			</Popup>
			<Popup show={showRemove} icon='heart'>
				Removed product
			</Popup>
		</Row>
	)
}

export default WishlistItem
