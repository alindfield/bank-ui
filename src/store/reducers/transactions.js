import {createAction, updateObject} from '../../shared/utilities';
import axios from 'axios';

const initialState = {
    rows: [],
    load: true,
    loading: false
};

const doUpdate = (state, action) => {
    return updateObject(state, {rows: action.data});
};

const doStart = (state) => {
    return updateObject(state, {loading: true});
};

const doSuccess = (state, action) => {
    return updateObject(state, {rows : action.data, loading: false, load: false});
};

const doFail = (state) => {
    return updateObject(state, {loading: false, load: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.UPDATE: return doUpdate(state, action);
        case actions.START: return doStart(state);
        case actions.SUCCESS: return doSuccess(state, action);
        case actions.FAIL: return doFail(state);
        default: return state;
    };
};

export default reducer;

export const actions = {
    UPDATE: 'UPDATE',
    START: 'START',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
};

export const getData = () => {
    return dispatch => {
        dispatch(doStartGet());
        axios.get('data/transactions.json')
            .then(response => {
                dispatch(doSuccessGet(response.data));
            })
            .catch(error => {
                dispatch(doFailGet());
            })
        ;
    };
};

export const updateData = (data) => {
    return createAction(actions.UPDATE, {data: data});
};

const doStartGet = () => {
    return createAction(actions.START);
};

const doSuccessGet = (data) => {
    return createAction(actions.SUCCESS, {data: data});
};

const doFailGet = () => {
    return createAction(actions.FAIL);
};
