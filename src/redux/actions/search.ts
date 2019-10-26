import axios from 'axios'
import { SEARCH_STUDENTS } from './__types'

export default (query:string) => async (dispatch:any) => {
    try {
        const response = await axios.get(`https://meyllos-school-management.herokuapp.com/api/`)
        dispatch({
            type: SEARCH_STUDENTS,
            payload: response.data.result,
            status: response.data.status
        })
    } catch (error) {
        return {
            error: error.message
        }
    }
}