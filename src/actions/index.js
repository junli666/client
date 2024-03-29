import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";
import streams from "../apis/streams";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  console.log("getState", getState);
  const { userId: aaa } = getState().auth;

  const response = await streams.post("/streams", { ...formValues, aaa });

  dispatch({ type: CREATE_STREAM, payload: response.data });

  console.log("before push");
  history.push("/");
  console.log(history);
  console.log("after push");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  console.log(response.data);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  const response = await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: response.data });
};
