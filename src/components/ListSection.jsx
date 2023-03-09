import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import WishlistItem from '../components/WishlistItem'

const ListSection = ({ list, handleRemove, handleRefresh }) => {
	return (
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
	)
}

export default ListSection
