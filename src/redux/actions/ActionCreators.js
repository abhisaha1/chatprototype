import ActionTypes from "./ActionTypes";
import fetch from "isomorphic-fetch";
import { browserHistory } from "react-router";
import { checkHttpStatus, parseJSON } from "../../utils/common";
import siteConfig from "../../../config/site.config";

export function fetchChatData() {
    return function(dispatch, state) {
        dispatch(ChatDataRequest());

        //let data = state.data;

        return fetch(`${siteConfig.apiDataLink}`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                dispatch(ChatDataRequestSuccess(response));
            })
            .catch(error => {
                dispatch(ChatDataRequestFailure(error));
            });
    };
}

export function ChatDataRequest() {
    return {
        type: ActionTypes.CHAT_DATA_REQUEST
    };
}

export function ChatDataRequestSuccess(data) {
    return {
        type: ActionTypes.CHAT_DATA_SUCCESS,
        payload: data
    };
}

export function ChatDataRequestFailure(error) {
    return {
        type: ActionTypes.CHAT_DATA_FAILURE,
        payload: {
            status: error.response.status,
            statusText: error.response.statusText
        }
    };
}

export function getThread(index) {
    return function(dispatch, state) {
        dispatch({
            type: ActionTypes.GET_MESSAGES,
            payload: index
        });
    };
}
