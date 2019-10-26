import { LOGIN, LOGINERROR } from '../actions/__types'
const initialState = {}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {
        case LOGIN || LOGINERROR:
            return {
                ...state,
                ...payload
            }
            default:
                return state
    }
}