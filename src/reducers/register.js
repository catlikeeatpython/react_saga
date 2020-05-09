// import {FETCH_USER_REQUEST} from './../constants/user'
const initialState = {
    isFetching: false,
    respCode:8000,
    respMsg: "内部错误",
    smsRespCode:8000,
    smsRespMsg: "内部错误",
    smsToken: null,
};

const register = (state= initialState,action = {}) => {
    switch(action.type){
        case "FETCH_SMS_CODE_SUCCEEDED":
            return {
                ...state,
                smsRespCode: action.respCode,
                smsRespMsg: action.respMsg,
                smsToken: action.smsToken
            }
        case "FETCH_SMS_CODE_FAILURE":
            return {
                ...state,
                smsRespCode: action.respCode || 8000,
                smsRespMsg: action.respMsg || "请求验证码出错",
            }
        case "FETCH_USER_REGISTER_SUCCEEDED":
            return {
                ...state,
                respCode: action.respCode,
                respMsg: action.respMsg,
            }
        case "FETCH_USER_REGISTER_FAILURE":
            return {
                ...state,
                respCode: action.respCode || 8000,
                respMsg: action.respMsg || "注册出错",
            }
        default: return state;
    }
}
export default register;