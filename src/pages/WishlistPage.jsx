import Container from 'react-bootstrap/Container'
import PricingSection from '../components/PricingSection'
import ActionSection from '../components/ActionSection'
import ListSection from '../components/ListSection'
import TitleSection from '../components/TitleSection'
import { useState, useEffect } from 'react'

const WishlistPage = () => {
	const [list, setList] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/products')
			.then((res) => res.json())
			.then((result) => {
				const list = result.map((item) => {
					return {
						...item,
						qty: 1,
					}
				})
				setList(list)
			})
	}, [])

	const handleRemove = (code) => {
		const newList = list.filter((item) => item.code !== code)
		setList(newList)
	}

	const handleRefresh = (code, newQty) => {
		const id = list.findIndex((item) => item.code === code)
		const item = { ...list[id], qty: newQty }
		const newList = list.with(id, item)
		setList(newList)
	}

	return (
		<Container>
			<TitleSection />
			<PricingSection list={list} />
			<ActionSection list={list} />
			<ListSection
				list={list}
				handleRemove={handleRemove}
				handleRefresh={handleRefresh}
			/>
		</Container>
	)
}

export default WishlistPage
