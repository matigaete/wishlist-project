import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavLink from 'react-bootstrap/NavLink'
import { useSelector } from 'react-redux'
import { selectCount } from '../reducers/counterReducer'

const Header = () => {
	const count = useSelector(selectCount)

	return (
		<Container>
			<Row>
				<Col>
					<Navbar bg='dark' expand='lg' variant='dark'>
						<Navbar.Brand href='#home'>
							<img className='logo' src='src/assets/icons/logo.svg'></img>
						</Navbar.Brand>
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='me-auto'>
								<NavDropdown title='Shop'>
									<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.2'>
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.3'>
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.4'>
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Our Story'>
									<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.2'>
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.3'>
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.4'>
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Discover'>
									<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.2'>
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.3'>
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.4'>
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
								<Form className='d-flex'>
									<Form.Control
										type='search'
										placeholder='Search Products, Collections, Keywords...'
										className='me-2'
										aria-label='Search'
									/>
								</Form>
							</Nav>
							<NavLink className='text-center'>
								<span className='icon icon--help'></span>
								Help
							</NavLink>
							<NavLink className='text-center'>
								<span className='icon icon--account'></span>
								Account
							</NavLink>
							<NavLink className='text-center'>
								<span className='icon icon--bag' onFocus={() => }>
									<span className='span-minicart'>{count || ''}</span>
								</span>
								Bag
								<div className='minicart--section'>
									<div className='minicart--header'>
										Items (1) Total: $22.00 PV 22.00
									</div>
									<div className='minicart--body'>
										<img src='/src/assets/products/adaptiv.svg' />
										<span>Arborvitae</span>
										<span>5 mL</span>
										$22.00 PV 22.00 Qty: 1
									</div>
									<div className='minicart--footer'></div>
								</div>
							</NavLink>
						</Navbar.Collapse>
					</Navbar>
				</Col>
			</Row>
		</Container>
	)
}

export default Header
