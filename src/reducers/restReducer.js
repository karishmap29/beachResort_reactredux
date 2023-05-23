import { FAIL, SUCCESS } from "../constants/restConstants"


export const restReducer = (state = { resortList: [] }, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                resortList:action.payload
            }
            case FAIL:
                return{
                    resortList:action.payload
                }
                default:
                    return state
    }
}