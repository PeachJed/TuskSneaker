import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
} from '../constants/userConstants'
import { RootState } from '../store'



//Login

export const login =
  (
    email: String,
    password: String
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })

      const response = await fetch('http://localhost:8081/api/login', { ///fetch call api backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()
      const userData = { firstName: data.first_name, lastName: data.last_name }

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userData,
      })

      localStorage.setItem('userInfo', JSON.stringify(userData))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:error
      })
    }
  }


  // logout
export const logout =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })

    await fetch('http://localhost:8081/api/logout', {///fetch call api backend
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
  }
