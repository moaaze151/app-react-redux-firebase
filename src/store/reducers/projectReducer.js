const initialState = {
  projects: [],
};
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, projects: [...state.projects, action.data] };
    case "DEL":
      state.projects = state.projects.filter((e) => e.id !== action.id);
      return { ...state, projects: [...state.projects] };
    case "CL":
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
export default projectReducer;
