import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

const Popup = ({ children, icon, show }) => {
	return (
		<Alert show={show} variant='dark' transition={true}>
			<Container>
				<img src={`src/assets/icons/${icon}.svg`} alt={icon} />
				<span style={{ color: 'white' }}> {children}</span>
			</Container>
		</Alert>
	)
}

export default Popup
