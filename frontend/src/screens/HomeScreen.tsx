import { useSelector } from 'react-redux'
import { UserState } from '../reducers/userReducers'
import { RootState } from '../store'
import Home from '../components/Home'


const HomeScreen = () => {
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  )

  const { userInfo } = userLogin
  const firstName = userInfo ? userInfo.firstName: null

  return firstName ? (
    <Home/>
  ) : (
      <div>
    <h1 className='textHome'>Welcome to TUSK Sneaker</h1>
      </div>
  )
}

export default HomeScreen
