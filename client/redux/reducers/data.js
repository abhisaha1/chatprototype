import ActionTypes from '../actions/ActionTypes';

const initialState = {
    data: null,
    fetchingContacts: true,
    fetchingThread: false,
    messages: null,
    activeUser: 0
};

export default function data(state = initialState, action) {

    switch (action.type) {
        case ActionTypes.CHAT_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetchingContacts: false
            }
        case ActionTypes.CHAT_DATA_REQUEST:
            return {
                ...state,
                fetchingContacts: true
            }
        case ActionTypes.CHAT_DATA_FAILURE:
            return {
                ...state,
                fetchingContacts: false
            }
        case ActionTypes.GET_MESSAGES:
            return {
                ...state,
                fetchingContacts: false,
                fetchingThread: false,
                activeUser: action.payload,
                messages: {
                    ...state.data[action.payload]
                }
            }
        default:
            break;
    }
    return state;
}
