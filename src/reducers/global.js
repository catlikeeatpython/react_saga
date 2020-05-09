const initialState = {
    isFetching: false,
    respCode:8000,
    respMsg: "内部错误",
    rsaKey: null,
    verfCodeImg: null,
    codeUUID:null,

    alertState: 'common-mtk',
    alertTitle: '提示',
    alertMsg:'',
    hideAlertState: 'common-mtkh',
    hideAlertTime: 0,
};

const global = (state= initialState,action = {}) => {
    switch(action.type){
        case "FETCH_RSA_PARAMS_SUCCESS":
            return {
                ...state,
                respCode: action.respCode,
                respMsg: action.respMsg,
                isFetching: true,
                rsaKey:action.rsaKey
            }
        case 'FETCH_RSA_PARAMS_FAIL':
            return {
                ...state,
                respCode: action.respCode || 8000,
                respMsg: action.respMsg || "获取RSA参数失败",
                isFetching: true,
            }
        case 'FETCH_VC_IMG_SUCCEEDED':
            return {
                ...state,
                respCode: action.respCode,
                respMsg: action.respMsg,
                isFetching: true,
                verfCodeImg: action.verfCodeImg,
                codeUUID:action.codeUUID,
            }
        case 'FETCH_VC_IMG_FAIL':
            return {
                ...state,
                respCode: action.respCode || 8000,
                respMsg: action.respMsg || "获取图片验证码失败",
                isFetching: true,
            }
        default: return state;
    }
}
export default global;