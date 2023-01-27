import { userInfo } from 'os'
import { SyntheticEvent } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { UserState } from '../reducers/userReducers'
import { RootState } from '../store'
import { logout } from '../actions/userActions'
import App from '../App'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  )
  const { userInfo } = userLogin

  const logoutHandler = async (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <Navbar collapseOnSelect className='nav_bar'>
      <Container>
        <Navbar.Brand href='/'></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {userInfo ? (
            <Nav className='logout'>
              <Nav.Link className='Out' onClick={logoutHandler}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav className='Sign-Log'>
              <Nav.Link  className='Sign' href='/signup'>Sign Up</Nav.Link>
                <Nav.Link className='Log' href='/login'>Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
