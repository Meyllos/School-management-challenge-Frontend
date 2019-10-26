import axios from 'axios'
import { LOGIN, LOGINERROR } from './__types'

export const LoginAction = (data: object) => async (dispatch:any) => {
    try {
        const response = await axios.post('https://meyllos-school-management.herokuapp.com/api/parents/login', data)
        console.log(response.data)
        dispatch({
            type: LOGIN,
            payload: response.data,
            status: response.data.status
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGINERROR,
            payload: {
                message: 'Account doesn\'t exist, consider creating account'
            },
            status: error.status
        })
    }
}
