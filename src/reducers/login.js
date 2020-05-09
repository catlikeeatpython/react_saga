// import {FETCH_USER_REQUEST} from './../constants/user'
const initialState = {
  list: [1,2,3,'q']
  };
  console.log("cccccccccc")
  const login = (state= initialState,action = {}) => {
    switch(action.type){  
      case "FETCH_USER_LOGIN_SUCCEEDED":
        return {
            ...state,
            respCode: action.list,
        }
    case 'FETCH_USER_LOGIN_FAILURE':
        return {
            ...state,
            list: [0,0,0]
        }
      default: return state;
    }
  }
  export default login;