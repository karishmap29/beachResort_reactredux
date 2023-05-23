import axios from "axios";
import { FAIL, SUCCESS } from "../constants/restConstants";


export const restList = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/beachresort.json')
        console.log(data.resorts);
        dispatch(
            {
              payload:data.resorts,
              type:SUCCESS
            }
        )

    }
    catch (error) {
        dispatch({
            payload:error,
            type:FAIL
        })

    }
}