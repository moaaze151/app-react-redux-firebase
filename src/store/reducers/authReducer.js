const initialState = {
  login: {
    login:false,
    email:"",
  },
  
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG":
      return { ...state, login: action.payload[0],email:action.payload[1] };
    default:
      return state;
  }
};
export default authReducer;