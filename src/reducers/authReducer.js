const INITIAL_STATE = {
  isSignedIn: null,
};

export default function aaa(state = INITIAL_STATE, action) {
  console.log("in reducer -- with action", action);
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
}
