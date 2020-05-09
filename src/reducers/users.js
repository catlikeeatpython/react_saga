// import {FETCH_USER_REQUEST} from './../constants/user'
const initialState = {
  isFetching: false,
  respCd:7999,
  msg:"内部错误",
  proCd:7999,
  promsg:"内部错误",
  dataCd:7999,
  datamsg:"内部错误",
  isCompleteCd:7999,
  isCompleteMsg:"内部错误",
  saveCd:7999,
  saveMsg:"内部错误",
  infoCd: '7999',
  infomsg: "内部错误",
  infoauthSt: "",
  infocollegeName: "",
  infocrtUserId:'',
  infodegree:'',
  infoemail: '',
  infoentrySchoolTime:'',
  lastLoginIp: '',
  lastLoginTs: '',
  mobile: '',
  recCrtTs:  '',
  recUpdTs: '',
  schoolName: '',
  status:  '',
  updUserId:  '',
  userId:  '',
  userName:  '',
  match: "",
  matchCd: 7999,
  matchMsg: "内部错误",
  unfinshFlag: false,
};

const users = (state= initialState,action = {}) => {
  switch(action.type){
    case "FETCH_PERSONAL_INFO_SUCCEEDED":
      return{
        ...state,
        respCd:action.respCd,
        msg:action.msg
      }
    case "FETCH_PERSONAL_INFO_FAILURE":
      return{
        ...state,
        respCd: action.respCd || 8000,
        msg: action.msg || "存储失败"
      }
    case "FETCH_SIGNUP_PROGRAME_SUCCESSDED":
      return{
        ...state,
        proCd:action.respCd,
        promsg:action.msg
      }
    case "FETCH_SIGNUP_PROGRAME_FAILURE":
      return{
        ...state,
        proCd: action.respCd || 8000,
        promsg: action.msg || "报名失败"
      }
    case "FETCH_SIGNUP_DATAMODALIG_SUCCESSDED":
      return{
        ...state,
        dataCd:action.respCd,
        datamsg:action.msg
      }
    case "FETCH_SIGNUP_DATAMODALIG_FAILURE":
      return{
        ...state,
        dataCd: action.respCd || 8000,
        datamsg: action.msg || "报名失败"
      }
    case "FETCH_SIGNUP_COMPLETEUSERINFO_SUCCESSDED":
     
      return{
        ...state,
        isCompleteCd:action.isCompleteCd,
        isCompleteMsg:action.isCompleteMsg
      }
    case "FETCH_SIGNUP_COMPLETEUSERINFO_FAILURE":
    
      return{
        ...state,
        isCompleteCd: action.isCompleteCd || 8000,
        isCompleteMsg: action.isCompleteMsg || "报名失败"
      }
    case "FETCH_INFORMATIONCOMENT_SUCCESSDED":

      return{
        ...state,
        infoCd: action.infoCd,
        infomsg: action.infomsg,
        infoauthSt: action.infoauthSt,
        infocollegeName: action.infocollegeName,
        infocrtUserId:action.infocrtUserId,
        infodegree: action.infodegree,
        infoemail: action.infoemail,
        infoentrySchoolTime:action.infoentrySchoolTime,
        lastLoginIp: action.lastLoginIp,
        lastLoginTs: action.lastLoginTs,
        mobile: action.mobile,
        recCrtTs:  action.recCrtTs,
        recUpdTs: action.recUpdTs,
        schoolName: action.schoolName,
        status:  action.status,
        updUserId:  action.updUserId,
        userId:  action.userId,
        userName:  action.userName
      }
    case "FETCH_INFORMATIONCOMENT_FAILURE":

      return{
        ...state,
        infoCd: action.isCompleteCd || 8000,
        infomsg: action.isCompleteMsg || "获取失败"
      }

    case "FETCH_SAVEINFORMATIONCOMENT_SUCCESSDED":
      // console.log("FETCH_SAVEINFORMATIONCOMENT_SUCCESSDED这是reducer",action.saveCd)
      return{
        ...state,
        saveCd:action.saveCd,
        saveMsg:action.saveMsg
      }
    case "FETCH_SAVEINFORMATIONCOMENT_FAILURE":

      return{
        ...state,
        saveCd: action.saveCd || 8000,
        saveMsg: action.saveMsg || "保存失败"
      }

    case "FETCH_OBTAINPROGRAME_SUCCESSDED":
      // console.log("FETCH_OBTAINPROGRAME_SUCCESSDED这是reducer",action.match)
      return{
        ...state,
        match: action.match,
        matchCd: action.matchCd,
        matchMsg: action.matchMsg
      }
    case "FETCH_OBTAINPROGRAME_FAILURE":
      return{
        ...state,
        matchCd: action.matchCd || 8000,
        matchMsg: action.matchMsg || "保存失败"
      }
    case "FETCH_UNFINSH_TRUE":
      return{
        ...state,
        unfinshFlag: true,
        
      }
    case "FETCH_UNFINSH_FALSE":
      return{
        ...state,
        unfinshFlag: false,
        
      }
    default: return state
  }
}
export default users;