import * as mes from './../constant/Message';
import * as types from './../constant/actionType';

var initialState=mes.MSG_WELCOME;
const message=(state=initialState,action)=>{
    switch(action.type){
        case types.CHANGE_MES:
            return action.message;
        default: return state;
    }
}
export default message;