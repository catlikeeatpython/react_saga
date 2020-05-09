export const get_Login = (payload) => {
  console.log(payload)
  let payl = {
    type: 'FETCH_USER_LOGIN_REQUEST',
    payload:payload
  }
  console.log(payl)
  // debugger;
  return {
    type: 'FETCH_USER_LOGIN_REQUEST',
    payload:payload
  }
  
};