//1-project actions
const adding = (data) => {
  return {
    type: "ADD",
    data: data ? data : {},
  };
};
const deleting = (param) => {
  return {
    type: "DEL",
    id: param ? param : "",
  };
};
const clearing = (arr) => {
  return {
    type: "CL",
    payload: arr,
  };
};

//2-auth actions
const hasLogged = (arr) => {
  return {
    type: "LOG",
    payload: arr,
  };
};
export { adding, deleting, clearing ,hasLogged};
